import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';

const getRating = (ratingValue) => {
    let itemToReturn = [];
    for(let i = 0; i < 5; i++) {
        if(ratingValue > 0)
            itemToReturn.push(<i class="fa fa-star" style={{color: 'yellow'}} key={i}></i>)
        else
            itemToReturn.push(<i class="fa fa-star" key={i}></i>)
        ratingValue -= 2;
    }
    return itemToReturn;
}

const MovieOverview = () => {
    const {movie} = useMyContext();
    let movieRating = movie.ratings.rating;
    let noOfGenre = false;
    return(
        <>
        <div className={styles['movie-overview-container']}>
            <div className={styles['image-container']} style={{backgroundImage: `url(${movie.title.image.url})`}}>
                
            </div>
            <div className={styles['movie-info-container']}>
                <div className={styles['movie-title']}>{movie.title.title}</div>
                <div className={styles['rating-container']}>
                    <div className={styles['rating-value-container']}>
                        <div className={styles['rating-value']}>{movie.ratings.rating}</div>
                        <div className={styles['rating-star']}>
                            {
                                getRating(movie.ratings.rating)
                            }
                        </div>

                    </div>
                    <div className={styles['rating-text-container']}>
                    <div className={styles['rating-text']}>
                            rating
                        </div>
                        <div className={styles['rating-text']}>
                            Grade now
                        </div>
                    </div>
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