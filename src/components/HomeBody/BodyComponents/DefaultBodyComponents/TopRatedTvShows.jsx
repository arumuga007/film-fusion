import { useState } from "react";
import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from "./DefaultSkeleton";
import MovieContainerTemplate from "./MovieContainerTemplate";
let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows';
const TopRatedTvShows = () => {
    return (
        <MovieContainerTemplate url={url} className='toprated-tvshow-container' type='topRatedTvShows'/>
    )
}

export default TopRatedTvShows;