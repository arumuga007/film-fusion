import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from './DefaultSkeleton';
import { useState, useEffect } from "react";
const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    return (
        <div className={styles['popular-movie-container']}>
            <DefaultSkeleton />
        </div>
    )
}

export default PopularMovies;