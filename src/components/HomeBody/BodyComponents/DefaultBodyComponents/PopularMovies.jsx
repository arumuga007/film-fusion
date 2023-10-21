import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from './DefaultSkeleton';
import { useState, useEffect } from "react";
import GetPopularMovies from "./GetPopularMovies";

const getSkeleton = () => {
    console.log('skeleton called');
    let itemsToReturn = [];
    for(let i = 0; i < 3; i ++) {
        itemsToReturn.push(<DefaultSkeleton />)
    }
    return itemsToReturn
}
const PopularMovies = () => {
    console.log('popular movies rendered');
const url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde34cd8f5msh88994d94fab9e68p18ea88jsn0096a040c9c4',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    const [popularMovies, setPopularMovies] = useState(false);
    let movies = [];
    useEffect(() => {
        fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            movies = data.slice(0, 4);
            setPopularMovies(movies);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <div className={styles['popular-movie-container']}>
            {popularMovies ?
            popularMovies.map((movieTitle) => {
                    let titleId = movieTitle.split('/')[2];
                    return <GetPopularMovies titleId={titleId}/>
            })
            : getSkeleton()}
        </div>
    )
}

export default PopularMovies;