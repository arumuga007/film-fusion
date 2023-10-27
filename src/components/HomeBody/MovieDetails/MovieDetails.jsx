import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
import { useEffect, useRef } from 'react';
import MovieOverview from './MovieOverview';
const MovieDetails = (props) => {
    const {movie, setShowMovie} = useMyContext();
    const movieContainer = useRef(null);
    useEffect(() => {
        movieContainer.current.classList.add('showMovieContainer');
    }, []);
    return(<div className={styles['movie-details-container']} ref={movieContainer}>
        {/* <div className={styles['movie-floating-design']}>
            <img src={movie.title.image.url}></img>
        </div> */}
        <div className={styles.icon} onClick={() => setShowMovie(false)}>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <MovieOverview />
    </div>)
}

export default MovieDetails;