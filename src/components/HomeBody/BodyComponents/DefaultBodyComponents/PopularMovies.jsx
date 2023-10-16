import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from './DefaultSkeleton';
import { useState, useEffect } from "react";

const getSkeleton = () => {
    let itemsToReturn = [];
    for(let i = 0; i < 3; i ++) {
        itemsToReturn.push(<DefaultSkeleton />)
    }
    return itemsToReturn
}

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    return (
        <div className={styles['popular-movie-container']}>
            {getSkeleton()}
        </div>
    )
}

export default PopularMovies;