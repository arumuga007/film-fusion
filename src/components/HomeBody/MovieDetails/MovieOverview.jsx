import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
const MovieOverview = () => {
    const {movie} = useMyContext();
    let noOfGenre = false;
    return(
        <>
        <div className={styles['movie-overview-container']}>
            <div className={styles['image-container']}>
                <img src={movie.title.image.url}></img>
            </div>
            <div className={styles['movie-info-container']}>
                <div className={styles['movie-title']}>{movie.title.title}</div>
                <div className={styles['rating-container']}>
                    <div className={styles['rating-value']}>{movie.ratings.rating}</div>
                    <div>rating</div>
                </div>
                <div className={styles['movie-genre-container']}>
                    {
                    movie.genres.map((genre, index) => {
                    if(noOfGenre)
                        return;
                    if(index >= 2)
                        noOfGenre = true;
                      return <div className={styles['genre-item']} key={index}>
                        {genre}
                      </div>
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieOverview;