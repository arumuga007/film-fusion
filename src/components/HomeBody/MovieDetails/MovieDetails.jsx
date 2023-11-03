import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
import MovieOverview from './MovieOverview';
import StoryLine from './StoryLine';
import Actor from './Actor';
import { changeToRelative } from '../BodyComponents/DefaultBodyContent';

const MovieDetails = (props) => {
    const {movie, setShowMovie} = useMyContext();
    return(<div className={styles['movie-details-container']}>
        <div className={styles['movie-floating-design']}>
            <img src={process.env.PUBLIC_URL + '/images/bannerImage.jpg'} ></img>
        </div>
        <div className={styles.icon} onClick={() => {setShowMovie(false); changeToRelative()}}>
        <i class="fa fa-angle-left"></i>
        </div>
        <MovieOverview />
        <StoryLine />
        <Actor />
    </div>)
}

export default MovieDetails;