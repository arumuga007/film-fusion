import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from './DefaultSkeleton';
import { useState, useEffect, useRef } from "react";
import GetPopularMovies from "./GetPopularMovies";
import Arrow from "./Arrow";



const getSkeleton = () => {
    console.log('skeleton called');
    let itemsToReturn = [];
    for(let i = 0; i < 10; i ++) {
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
		'X-RapidAPI-Key': 'd92540368emshd095ea53a9a4ad0p16931fjsn1572d4bc284b',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};


const moveMovies = () => {
    leftValue = movieContainer.scrollLeft + 270;
    movieContainer.scrollTo({
        left: leftValue,
        behavior: "smooth"
      });
    
}

const moveMoviesLeft = () => {
    leftValue = movieContainer.scrollLeft - 270;
    movieContainer.scrollTo({
        left: leftValue,
        behavior: "smooth"
      });
}
    const parentRef = useRef();
    const [popularMovies, setPopularMovies] = useState(false);
    let movieContainer = null;
    let movies = [];
    let leftValue = 0;
    useEffect(() => {
        fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            movies = data.slice(0, 10);
            setPopularMovies(movies);
        })
        .catch((error) => {
            console.log(error);
        })
        movieContainer = document.querySelector('#movieContainer');
    }, []);
    return (
        <div className={styles['popular-movie-container']} id='movieContainer' ref={parentRef}>
            {popularMovies ?
            popularMovies.map((movieTitle) => {
                    let titleId = movieTitle.split('/')[2];
                    return <GetPopularMovies titleId={titleId}/>
            })
            : getSkeleton()}
            <Arrow moveMovies={moveMovies} moveMoviesLeft={moveMoviesLeft} movieContainer={parentRef}/>
        </div>
    )
}

export default PopularMovies;