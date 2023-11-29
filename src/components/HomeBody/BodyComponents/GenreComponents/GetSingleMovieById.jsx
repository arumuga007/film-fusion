import { createContext, useContext, useEffect, useState } from 'react';
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
import { getSkeleton } from './GetMovies';
import MovieDetails from '../../MovieDetails/MovieDetails';
import { imageNotFound } from '../../../../GlobalConstants/GlobalConstant';

export const movieDetailsContext = createContext();
export const useMyContext = () => useContext(movieDetailsContext);
const GetSingleMovieById = (props) => {
    const [render, setRender] = useState(0);
    const [movie, setMovie] = useState(false);
    const [showMovie, setShowMovie] = useState(false);
    const url = `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${props.title}&currentCountry=US`;
    let titleId = props.title;

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // This provides a smooth scrolling animation
        });
        setShowMovie(true);
      }
    useEffect(() => {
        setTimeout(() => {
            fetch(url, props.options)
            .then(response => response.json())
            .then((data) => {
                if(data.message) {
                    // console.log(data.message);
                    setRender(render + 1);
                    return;
                }
                // console.log(data);
                setMovie(data);
            })
            .catch(err => console.log(err));

        }, props.timeOut)
    }, [render])

    return(
        <>
        {
            movie ? 
             (movie.title ? <div className={styles['single-movie-container']} onClick={() => scrollToTop()}>
                <div className={styles['image-container']}>
                    <img src={movie.title.image ? movie.title.image.url : imageNotFound} className={styles.image} ></img>
                </div>
                <div className={styles['movie-name-rating-container']}>
                <div className={styles.name}>{movie.title.title ? movie.title.title : 'Title not available'}</div>
                {movie.ratings && <div className={styles['movie-rating-container']}>
                    <i class="fa-solid fa-star"></i>
                    <div className={styles['movie-rating']}>
                    {movie.ratings.rating ? movie.ratings.rating : '0.0'}
                    </div>
                    </div>}
                </div>
                
            </div>
            : <div className={styles['single-movie-container']}><div className={styles.name}>sorry movie detail currently not available in server</div></div>
            )
            : getSkeleton()
            
        }
        <movieDetailsContext.Provider value={{movie, setShowMovie, titleId}}>
            {showMovie && <MovieDetails />}
        </movieDetailsContext.Provider>
        </>
    )
}

export default GetSingleMovieById;