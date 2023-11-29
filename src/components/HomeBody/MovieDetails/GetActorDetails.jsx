import { useEffect, useState } from 'react';
import style from './../../../style/BodyStyles/MovieDetails.module.css';
import { getActorSkeleton } from './Actor';
import { imageNotFound } from '../../../GlobalConstants/GlobalConstant';

const GetActorDetails = (props) => {
    const [actorDetails, setActorDetails] = useState(false);
    const [render, setRender] = useState(0);
    const url = `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${props.actorId}`;
    useEffect(() => {
        setTimeout(() => {
            fetch(url, props.options)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setActorDetails(data);
            })
            .catch((err) => {
                // console.log('error occured in fetching a actor details for movie overview page', err);
                setRender(render + 1);
            })
        }, props.timeOut)
    }, [render]);
    return(
        <>
        {
            actorDetails ? 
                <div className={style['single-actor-details']}>
                    <div className={style['actor-image-container']} style={{background: `url(${actorDetails.image ? actorDetails.image.url : imageNotFound})`}}>
                        <img src={actorDetails.image ? actorDetails.image.url : imageNotFound} className={style['actor-image']}></img>
                    </div>
                    {actorDetails.name && <div className={style['actor-name']}>{actorDetails.name}</div>}
                </div>
            : getActorSkeleton()
        }
        </>
    )
}

export default GetActorDetails;