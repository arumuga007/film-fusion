import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
import MovieOverview from './MovieOverview';
const MovieDetails = (props) => {
    const {movie, setShowMovie} = useMyContext();
    return(<div className={styles['movie-details-container']}>
        <div className={styles['movie-floating-design']}>
            <img src={process.env.PUBLIC_URL + '/images/bannerImage.jpg'} ></img>
        </div>
        <div className={styles.icon} onClick={() => setShowMovie(false)}>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <MovieOverview />
    </div>)
}

export default MovieDetails;