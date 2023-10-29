import { createContext, useContext, useEffect, useState } from 'react';
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
import { getSkeleton } from './GetMovies';
import MovieDetails from '../../MovieDetails/MovieDetails';

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
                    console.log(data.message);
                    setRender(render + 1);
                    return;
                }
                console.log(data);
                setMovie(data);
            })
            .catch(err => console.log(err));

        }, props.timeOut)
    }, [render])

    return(
        <>
        {
            movie ? 
             <div className={styles['single-movie-container']} onClick={() => scrollToTop()}>
                <div className={styles['image-container']}>
                    <img src={movie.title.image.url} className={styles.image} ></img>
                </div>
                <div className={styles.name}>{movie.title.title}</div>
                
            </div>
            : getSkeleton()
            
        }
        <movieDetailsContext.Provider value={{movie, setShowMovie, titleId}}>
            {showMovie && <MovieDetails />}
        </movieDetailsContext.Provider>
        </>
    )
}

export default GetSingleMovieById;