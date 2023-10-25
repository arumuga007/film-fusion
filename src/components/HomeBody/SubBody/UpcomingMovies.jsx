import styles from './../../../style/BodyStyles/SubBody.module.css';
import { getUpcomingMoviesSkeleton } from '../SubBody';
import { useEffect, useState } from 'react';
const UpcomingMovies = (props) => {
    const [upcomingMovie, setUpcomingMovie] = useState(false);
    const [render, setRender] = useState(0);
    const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${props.title}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1f56e93584mshececd60fb33af54p119ec4jsn3077292436e3',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    useEffect(() => {
        // fetch(url, options)
        // .then(response => response.json())
        // .then((data) => {
        //     setUpcomingMovie(data);
        // })
        // .catch((error) => {
        //     console.log('error occured while getting a upcoming movies', error);
        // })
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setUpcomingMovie(data);
                } catch (error) {
                    setRender(render + 1);
                    console.error('Error occurred while getting upcoming movie details', error);
                }
            };
        
            fetchData();
        }, props.timeOut)

    }, [render])

    return(
        <>
        {upcomingMovie 
        ?
            <div className={styles.UpcomingMovieContainer}>
                <div className={styles['upcoming-movie-image-container']}>
                <img src={upcomingMovie.image.url} className={styles['upcoming-movie-image']} />
                </div>
                 <div className={styles['upcoming-movie-title']}>{upcomingMovie.title}</div>
                <div className={styles['release-date']}>release date: {props.releaseDate}</div>
            </div>

        : getUpcomingMoviesSkeleton()}
        </>
    )

}

export default UpcomingMovies;