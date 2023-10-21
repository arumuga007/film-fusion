import { useEffect, useState } from "react";
import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
const GetPopularMovies = (props) => {
    const [movie, setMovie] = useState(false);
    const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${props.titleId}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f205f3410dmsh190cd8919f9a65ap1376ebjsnd9169a12b50e',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                if(data.message) {
                    return;
                }
                setMovie(data);
                console.log(data);
            })
            .catch((error) => console.log(error))
            
        }, 400);
    }, [])

    return (
        <>
        {
            movie ?
        <div className={styles['single-popular-movie-container']}>
            <div className={styles['popular-movie-image-container']}>
            <img src={movie.image.url} className={styles['popular-movie-image']} />
            </div>
            <div className={styles['popular-name-rating-container']}>
                <div className={styles['popular-movie-title']}>{movie.title}</div>
            </div>
        </div>
        :
        <div>nothing</div>
        }
        </>
    )
}

export default GetPopularMovies;