import { useEffect, useState } from 'react';
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
import GetSingleMovieById from './GetSingleMovieById';
import Skeleton from './Skeleton';

export const getSkeleton = () => {
    let itemToReturn = []
    for(let i = 0; i < 12; i++)
        itemToReturn.push(<Skeleton key={i}/>);
    return itemToReturn;
}

const GetMovies = (props) => {
    const url = `https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${props.category}&limit=7`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '987a570bf1msh6f36186def0d287p1ecec3jsnb5d0bbed0445',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const [movies, setMovies] = useState(false);
    let timeOut = 0;
    useEffect(() => {
        fetch(url, options)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        setMovies(data);
        })
    }, []);

    return(
        <div className={styles['get-movie-container']} >
        {
            movies
            ? movies.map((movieTitle, index) => {
                let title = movieTitle.split('/')[2];
                timeOut += 350;
                return <GetSingleMovieById title={title} url={url} options={options} timeOut={timeOut} key={index}/>
            })
            : getSkeleton()
        }
        </div>
    )
}
export default GetMovies;