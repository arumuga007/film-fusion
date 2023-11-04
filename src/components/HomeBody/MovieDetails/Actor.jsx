import { useEffect, useState, useRef } from 'react';
import style from './../../../style/BodyStyles/MovieDetails.module.css';
import GetActorDetails from './GetActorDetails';
import GetActorSkeleton from './ActorSkeleton';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
import Arrow from '../BodyComponents/DefaultBodyComponents/Arrow';

export const getActorSkeleton = () => {
    const itemToReturn = [];
    for(let i = 0; i < 5; i++) {
        console.log('called', i);
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
            'X-RapidAPI-Key': '6ab8fdfa38msh4c9b648603dab30p1a3885jsn60dd6301c748',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    let leftValue = 0;
    let timeOut = 0;
    let parentReference = useRef();
    const moveMovies = () => {
        leftValue = parentReference.current.scrollLeft + 270;
        parentReference.current.scrollTo({
            left: leftValue,
            behavior: "smooth"
          });
        
    }
    
    const moveMoviesLeft = () => {
        leftValue = parentReference.current.scrollLeft - 270;
        parentReference.current.scrollTo({
            left: leftValue,
            behavior: "smooth"
          });
    }

    useEffect(() => {
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            setActor(data.slice(0,1));
        })
        .catch((err) => console.log('error occured in getting actor name id in movie overview page', err));
    }, []);
    return(
        <div className={style['actor-container']}>
            <div className={style['actor-header']}>
                Actors
            </div>
            <div className={style['actor-details-container']} ref={parentReference}>
                {actor
                    ? actor.map((actor, index) => {
                        timeOut += 350;
                        let singleActor = actor.split('/')[2];
                        return <GetActorDetails actorId={singleActor} options={options} timeOut={timeOut} key={index}/>
                    })
                    :getActorSkeleton()
                }
                <Arrow moveMovies={moveMovies} moveMoviesLeft={moveMoviesLeft} movieContainer={parentReference} />
            </div>
        </div>
    )
}
export default Actor;