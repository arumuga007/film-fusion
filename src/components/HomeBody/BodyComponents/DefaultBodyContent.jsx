import PopularMovies from './DefaultBodyComponents/PopularMovies';
import TopRatedMovies from './DefaultBodyComponents/TopRatedMovies';
import TopRatedTvShows from './DefaultBodyComponents/TopRatedTvShows';
import styles from './../../../style/BodyStyles/BodyContent.module.css';
const DefaultBodyContent = () => {
    return (
        <>
        <div className={styles.popularMovies}>
        
            <div class={styles.Headline}>Popular Movies</div>
            <PopularMovies />
        </div>
        <div className={styles.TopRatedMovies}>
            <div class={styles.Headline}>Top Rated Movies</div>
            <TopRatedMovies />
        </div>
        <div className={styles.TopRatedTvShow}>
            <div class={styles.Headline}>Top Rated Tv Shows</div>
            <TopRatedTvShows />
        </div>
        </>
    )
}

export default DefaultBodyContent;