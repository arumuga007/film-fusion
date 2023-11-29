import { useEffect, useState } from "react";
import GetActorSkeleton from "../HomeBody/MovieDetails/ActorSkeleton";
import { getSkeleton } from "../HomeBody/BodyComponents/GenreComponents/GetMovies";
import styles from './../../style/BodyStyles/GenreComponentStyle.module.css';
import GetActor from "./GetActor";

const Actors = (props) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10fedc01d6mshe338e5d6cd22dc7p109fc9jsn993307cacf5e',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    let timeOut = 0;
    const [actors, setActors] = useState(null); 

    useEffect(() => {
        let url = ''; 

        if (props.type === 'popularActors') {
            url = 'https://imdb8.p.rapidapi.com/actors/list-most-popular-celebs?homeCountry=IN&currentCountry=IN&purchaseCountry=IN';
            // console.log('popular actors called');
        } else {
            const date = new Date();
            url = `https://imdb8.p.rapidapi.com/actors/list-born-today?month=${date.getMonth() + 1}&day=${date.getDate()}`;
            // console.log('born today actors called');
        }
        setActors(false);
        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setActors(data.slice(0, 8));
                // console.log(actors);
            })
            .catch((err) => console.log('error occurred in execution', err));
    }, [props.type]);

    return (
        <div className={styles['get-movie-container']} >
            {
                actors
                ? actors.map((movieTitle, index) => {
                    // console.log('actors', actors);
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
