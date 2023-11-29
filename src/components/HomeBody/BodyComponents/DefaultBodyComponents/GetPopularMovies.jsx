import { useEffect, useState } from "react";
import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from "./DefaultSkeleton";
import { movieDetailsContext } from "../GenreComponents/GetSingleMovieById";
import MovieDetails from "../../MovieDetails/MovieDetails";
import { changeToStatic } from "../DefaultBodyContent";


const getSkeleton = () => {
    console.log('skeleton called');
    let itemsToReturn = [];
    for(let i = 0; i < 10; i ++) {
        itemsToReturn.push(<DefaultSkeleton key={i}/>)
    }
    return itemsToReturn
}

const GetPopularMovies = (props) => {
    const [render, setRender] = useState(0);
    const [movie, setMovie] = useState(false);
    const [showMovie, setShowMovie] = useState(false);
    const urls = `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${props.titleId}&currentCountry=US`;
    let titleId = props.titleId;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': props.apikey,
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

    function scrollToTop() {
        changeToStatic();
        window.scrollTo({
        top: 0,
        behavior: "smooth" // This provides a smooth scrolling animation
        });
        setShowMovie(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(urls, options)
            .then((response) => response.json())
            .then((data) => {
                if(data.message) {
                    // console.log(data.message);
                    setRender(render + 1);
                    return;
                }
                setMovie(data);
                // console.log(data);
            })
            .catch((error) => console.log(error))
            
        }, props.timeOut);
    }, [render])

    return (
        <>
        {
            movie ?
        <div className={styles['single-popular-movie-container']} onClick={() => scrollToTop()}>
            <div className={styles['popular-movie-image-container']}>
            <img src={movie.title.image.url} className={styles['popular-movie-image']} />
            </div>
            <div className={styles['popular-name-rating-container']}>
                <div className={styles['popular-movie-title']}>{movie.title.title ? movie.title.title : 'Title not available'}</div>
                <div className={styles['popular-rating-container']}>
                    <i class="fa-solid fa-star"></i>
                    {movie.ratings && <div className={styles['popular-movie-rating']}>{movie.ratings.rating ? movie.ratings.rating : ''}</div>}
                </div>
            </div>
        </div>
        :
        getSkeleton()
        }
        <movieDetailsContext.Provider value={{movie, setShowMovie, titleId}}>
            {showMovie && <MovieDetails />}
        </movieDetailsContext.Provider>
        </>
    )
}

export default GetPopularMovies;