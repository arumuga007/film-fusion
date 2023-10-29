import { useEffect, useState } from 'react';
import style from './../../../style/BodyStyles/MovieDetails.module.css';
import GetActorDetails from './GetActorDetails';
import GetActorSkeleton from './ActorSkeleton';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';

export const getActorSkeleton = () => {
    const itemToReturn = [];
    for(let i = 0; i < 5; i++) {
        itemToReturn.push(<GetActorSkeleton />)
    }
    return itemToReturn;
}

const Actor = () => {
    const [actor, setActor] = useState(false);
    const {titleId} = useMyContext();
    const url = `https://imdb8.p.rapidapi.com/title/get-top-cast?tconst=${titleId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '59689d85b6msh26ad0cac83f8cb3p1c0870jsn5b6b9821a000',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            setActor(data.slice(0,5));
        })
        .catch((err) => console.log('error occured in getting actor name id in movie overview page', err));
    }, []);
    return(
        <div className={style['actor-container']}>
            <div className={style['actor-header']}>
                Actors
            </div>
            <div className={style['actor-details-container']}>
                {actor
                    ? actor.map((actor, index) => {
                        let singleActor = actor.split('/')[2];
                        return <GetActorDetails actorId={singleActor} options={options} />
                    })
                    :getActorSkeleton()
                }
            </div>
        </div>
    )
}
export default Actor;