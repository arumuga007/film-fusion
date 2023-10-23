import { useEffect, useState } from "react";
import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
const GetPopularMovies = (props) => {
    const [movie, setMovie] = useState(false);
    const url = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${props.titleId}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd92540368emshd095ea53a9a4ad0p16931fjsn1572d4bc284b',
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