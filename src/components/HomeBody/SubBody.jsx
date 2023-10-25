import { useEffect, useState } from 'react';
import styles from './../../style/BodyStyles/SubBody.module.css';
import UpcomingMovies from './SubBody/UpcomingMovies';
import UpcomingMoviesSkeleton from './SubBody/UpcomingMoviesSkeleton';

const getUpcomingMoviesSkeleton = () => {
    let itemsToReturn = [];
    for(let i = 0; i < 4; i++) {
        itemsToReturn.push(<UpcomingMoviesSkeleton />);
    }
    return itemsToReturn;
}

const SubBody = () => {
    const [upcomingMovie, setUpcomingMovie] = useState(false);
    return (
        <div className={styles['sub-body']}>
            <div className={styles.upcomingMoviesHeader}>Upcoming Movies</div>
            {
                upcomingMovie
                ? <UpcomingMovies />
                : getUpcomingMoviesSkeleton()
            }
        </div>
    )
}
export default SubBody;