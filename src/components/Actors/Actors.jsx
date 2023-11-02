import { useEffect, useState } from "react";
import GetActorSkeleton from "../HomeBody/MovieDetails/ActorSkeleton";
import { getSkeleton } from "../HomeBody/BodyComponents/GenreComponents/GetMovies";
import styles from './../../style/BodyStyles/GenreComponentStyle.module.css';
import GetActor from "./GetActor";

const Actors = (props) => {
    let url = '';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '59689d85b6msh26ad0cac83f8cb3p1c0870jsn5b6b9821a000',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    let timeOut = 0;
    const [actors, setActors] = useState(false);
    if(props.type == 'popularActors')
        url = 'https://imdb8.p.rapidapi.com/actors/list-most-popular-celebs?homeCountry=IN&currentCountry=IN&purchaseCountry=IN';
    else
        url = 'https://imdb8.p.rapidapi.com/actors/list-born-today';

    useEffect(() => {
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setActors(data.slice(0, 1));
        })
        .catch((err) => console.log('error occured in execution', err))
    }, []);

    return(
        <div className={styles['get-movie-container']} >
            {
                actors
                ? actors.map((movieTitle, index) => {
                    let actorId = movieTitle.split('/')[2];
                    timeOut += 350;
                    return <GetActor actorId={actorId} options={options} timeOut={timeOut} key={index}/>
                })
                : getSkeleton()
            }
        </div>
    )
}

export default Actors;