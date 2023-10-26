import { useEffect, useState } from 'react';
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
import { getSkeleton } from './GetMovies';
const GetSingleMovieById = (props) => {
    const [render, setRender] = useState(0);
    const [movie, setMovie] = useState(false);
    const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${props.title}`;
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
                setMovie(data);
            })
            .catch(err => console.log(err));

        }, props.timeOut)
    }, [render])

    return(
        <>
        {
            movie ? 
             <div className={styles['single-movie-container']} >
                <div className={styles['image-container']}>
                    <img src={movie.image.url} className={styles.image} ></img>
                </div>
                <div className={styles.name}>{movie.title}</div>
            </div>
            : getSkeleton()
        }
        </>
    )
}

export default GetSingleMovieById;