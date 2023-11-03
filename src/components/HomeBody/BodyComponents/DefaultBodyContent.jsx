import PopularMovies from './DefaultBodyComponents/PopularMovies';
import TopRatedMovies from './DefaultBodyComponents/TopRatedMovies';
import TopRatedTvShows from './DefaultBodyComponents/TopRatedTvShows';
import styles from './../../../style/BodyStyles/BodyContent.module.css';
import './../../../App.css';

export const changeToStatic = () => {
    let references = document.querySelectorAll('.popularMovies');
    references.forEach((reference) => {
        reference.style.position = 'static';
    })
}

export const changeToRelative = () => {
    let references = document.querySelectorAll('.popularMovies');
    references.forEach((reference) => {
        reference.style.position = 'relative';
    })
}

const DefaultBodyContent = () => {
    return (
        <>
        <div className="popularMovies">
        
            <div className={styles.Headline}>Popular Movies</div>
            <PopularMovies />
        </div>
        
        <div className="popularMovies">
            <div className={styles.Headline}>Top Rated Movies</div>
            <TopRatedMovies />
        </div>
        <div className="popularMovies">
            <div className={styles.Headline}>Top Rated Tv Shows</div>
            <TopRatedTvShows />
        </div>
        </>
    )
}

export default DefaultBodyContent;