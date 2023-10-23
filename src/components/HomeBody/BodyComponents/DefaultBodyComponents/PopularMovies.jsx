import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from './DefaultSkeleton';
import { useState, useEffect, useRef } from "react";
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

const movieContainerScroll = () => {
    let totalWidth = movieContainer.scrollLeft + movieContainer.clientWidth;
    if(totalWidth + 10 >= movieContainer.scrollWidth)
      rightArrow.current.style.display = 'none';
    else
      rightArrow.current.style.display = 'block';
    if(movieContainer.scrollLeft > 0)
        leftArrow.current.style.display = 'block';
    else 
        leftArrow.current.style.display = 'none';
}

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

    const [popularMovies, setPopularMovies] = useState(false);
    const rightArrow = useRef();
    const leftArrow = useRef();
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
        movieContainer.addEventListener('scroll', movieContainerScroll);
        leftArrow.current.style.display = 'none';
        rightArrow.current.addEventListener('click', moveMovies);
        leftArrow.current.addEventListener('click', moveMoviesLeft);

        return () => {
            rightArrow.current.removeEventListener('click', moveMovies);
            leftArrow.current.removeEventListener('click', moveMoviesLeft);
        }
    }, []);
    return (
        <div className={styles['popular-movie-container']} id='movieContainer'>
            <div className={styles.rightArrowContainer}>
                <i class="fa fa-angle-right" ref={rightArrow} ></i>
            </div>
            <div className={styles.leftArrowContainer}>
                <i class="fa fa-angle-left" ref={leftArrow} className={styles.leftArrow}></i>
            </div>
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