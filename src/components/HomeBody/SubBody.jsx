import { useEffect, useState } from 'react';
import styles from './../../style/BodyStyles/SubBody.module.css';
import UpcomingMovies from './SubBody/UpcomingMovies';
import UpcomingMoviesSkeleton from './SubBody/UpcomingMoviesSkeleton';

export const getUpcomingMoviesSkeleton = () => {
    let itemsToReturn = [];
    for(let i = 0; i < 4; i++) {
        itemsToReturn.push(<UpcomingMoviesSkeleton key={i} />);
    }
    return itemsToReturn;
}

const SubBody = () => {
    let timeOut = 0;
    const [upcomingMovie, setUpcomingMovie] = useState(false);
    const url = 'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f56e93584mshececd60fb33af54p119ec4jsn3077292436e3',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    useEffect(() => {
        fetch(url, options)
        .then(response => response.json())
        .then((data) => {
            setUpcomingMovie(data.slice(0,5));
        })
        .catch((error) => {
            console.log('error occured during fetching a title Id  for upcoming movies', error);
        })
    }, []);

    return (
        <div className={styles['sub-body']}>
            <div className={styles.upcomingMoviesHeader}>Upcoming Movies</div>
            {
                upcomingMovie
                ? upcomingMovie.map((movieTitle, index) => {
                    timeOut += 500;
                    let title = movieTitle.id.split('/')[2];
                    return <UpcomingMovies title={title} releaseDate={movieTitle.releaseDate} timeOut={timeOut} key={index}/>
                })
                : getUpcomingMoviesSkeleton()
            }
        </div>
    )
}
export default SubBody;