import { useEffect, useState } from "react";
import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
const GetPopularMovies = (props) => {
    const [render, setRender] = useState(0);
    const [movie, setMovie] = useState(false);
    const urls = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${props.titleId}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde34cd8f5msh88994d94fab9e68p18ea88jsn0096a040c9c4',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(urls, options)
            .then((response) => response.json())
            .then((data) => {
                if(data.message) {
                    setRender(render + 1);
                    return;
                }
                setMovie(data);
                console.log(data);
            })
            .catch((error) => console.log(error))
            
        }, 1000);
    }, [render])

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