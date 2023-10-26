import { useEffect, useState } from 'react';
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
import GetSingleMovieById from './GetSingleMovieById';
import Skeleton from './Skeleton';

const getSkeleton = () => {
    let itemToReturn = []
    for(let i = 0; i < 12; i++)
        itemToReturn.push(<Skeleton key={i}/>);
    return itemToReturn;
}

const GetMovies = () => {
    let genreArray = window.location.href.split('/');
    let genre = genreArray[genreArray.length - 1].split('-')[0];
    const url = `https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${genre}&limit=15`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10fedc01d6mshe338e5d6cd22dc7p109fc9jsn993307cacf5e',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const [movies, setMovies] = useState(false);

    // useEffect(() => {
    //     fetch(url, options)
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setMovies(data);
    //     })
    // }, []);

    return(
        <div className={styles['get-movie-container']} >
        {
            movies
            ? <GetSingleMovieById />
            : getSkeleton()
        }
        </div>
    )
}
export default GetMovies;