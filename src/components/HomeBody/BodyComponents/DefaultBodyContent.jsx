import { useEffect } from 'react';
import PopularMovies from './DefaultBodyComponents/PopularMovies';
import TopRatedMovies from './DefaultBodyComponents/TopRatedMovies';
import TopRatedTvShows from './DefaultBodyComponents/TopRatedTvShows';
import styles from './../../../style/BodyStyles/BodyContent.module.css';
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde34cd8f5msh88994d94fab9e68p18ea88jsn0096a040c9c4',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
const DefaultBodyContent = () => {

    useEffect(() => {
            // fetch(url, options)
            // .then((response) => {
            //     return response.json()
            // })
            // .then((data) => {
            //     console.log(data)
            // })
    }, []);

    return (
        <>
        <div className={styles.popularMovies}>
        
            <div class={styles.Headline}>Popular Movies</div>
            <PopularMovies />
        </div>
        {/* <div className={styles.TopRatedMovies}>
            <div class={styles.Headline}>Top Rated Movies</div>
            <TopRatedMovies />
        </div>
        <div className={styles.TopRatedTvShow}>
            <div class={styles.Headline}>Top Rated Tv Shows</div>
            <TopRatedTvShows />
        </div> */}
        </>
    )
}

export default DefaultBodyContent;