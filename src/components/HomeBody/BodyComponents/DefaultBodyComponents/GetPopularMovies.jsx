import { useEffect, useState } from "react";
import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from "./DefaultSkeleton";
const getSkeleton = () => {
    console.log('skeleton called');
    let itemsToReturn = [];
    for(let i = 0; i < 10; i ++) {
        itemsToReturn.push(<DefaultSkeleton />)
    }
    return itemsToReturn
}

const GetPopularMovies = (props) => {
    const [render, setRender] = useState(0);
    const [movie, setMovie] = useState(false);
    const urls = `https://imdb8.p.rapidapi.com/title/get-details?tconst=${props.titleId}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd92540368emshd095ea53a9a4ad0p16931fjsn1572d4bc284b',
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
        getSkeleton()
        }
        </>
    )
}

export default GetPopularMovies;