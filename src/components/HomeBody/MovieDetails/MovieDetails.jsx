import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
const MovieDetails = (props) => {
    const {movie, setShowMovie} = useMyContext();
    return(<div className={styles['movie-details-container']}>
        <div className={styles.icon} onClick={() => setShowMovie(false)}>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        {movie.title.title}
    </div>)
}

export default MovieDetails;