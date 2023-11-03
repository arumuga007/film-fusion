import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from './DefaultSkeleton';
import { useState, useEffect, useRef } from "react";
import GetPopularMovies from "./GetPopularMovies";
import Arrow from "./Arrow";



const getSkeleton = () => {
    console.log('skeleton called');
    let itemsToReturn = [];
    for(let i = 0; i < 10; i ++) {
        itemsToReturn.push(<DefaultSkeleton key={i}/>)
    }
    return itemsToReturn
}
const PopularMovies = () => {
let apikey = '987a570bf1msh6f36186def0d287p1ecec3jsnb5d0bbed0445';
const url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ab8fdfa38msh4c9b648603dab30p1a3885jsn60dd6301c748',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};


const moveMovies = () => {
    leftValue = parentRef.current.scrollLeft + 270;
    parentRef.current.scrollTo({
        left: leftValue,
        behavior: "smooth"
      });
    
}

const moveMoviesLeft = () => {
    leftValue = parentRef.current.scrollLeft - 270;
    parentRef.current.scrollTo({
        left: leftValue,
        behavior: "smooth"
      });
}
    const parentRef = useRef();
    const [popularMovies, setPopularMovies] = useState(false);
    const [datafetched, setDataFetched] = useState(0);
    let movies = [];
    let timeOut = 0;
    let leftValue = 0;
    useEffect(() => {
        setTimeout(() => {
            fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                movies = data.slice(0, 2);
                console.log(movies);
                setPopularMovies(movies);
            })
            .catch((error) => {
                console.log(error);
                setDataFetched(datafetched + 1);
            })
        }, 1000)
    }, [datafetched]);
    return (
        <div className={styles['popular-movie-container']} id='movieContainer' ref={parentRef}>
            {popularMovies ?
            popularMovies.map((movieTitle, index) => {
                    let titleId = movieTitle.split('/')[2];
                    timeOut += 300;
                    return <GetPopularMovies titleId={titleId} apikey={apikey} timeOut={timeOut} key={index} />
            })
            : getSkeleton()}
            <Arrow moveMovies={moveMovies} moveMoviesLeft={moveMoviesLeft} movieContainer={parentRef}/>
        </div>
    )
}

export default PopularMovies;