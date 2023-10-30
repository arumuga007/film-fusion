import { useEffect, useState } from 'react';
import style from './../../../style/BodyStyles/MovieDetails.module.css';
import { getActorSkeleton } from './Actor';
const GetActorDetails = (props) => {
    const [actorDetails, setActorDetails] = useState(false);
    const url = `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${props.actorId}`;
    useEffect(() => {
        fetch(url, props.options)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setActorDetails(data);
        })
        .catch((err) => console.log('error occured in fetching a actor details for movie overview page', err))
    }, []);
    return(
        <>
        {
            actorDetails ? 
                <div className={style['single-actor-details']}>
                    <div className={style['actor-image']} style={{background: `url(${actorDetails.image.url})`}}></div>
                    <div className={style['actor-name']}>{actorDetails.name}</div>
                </div>
            : getActorSkeleton()
        }
        </>
    )
}

export default GetActorDetails;