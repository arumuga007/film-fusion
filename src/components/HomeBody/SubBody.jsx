import { useEffect, useState, useRef } from 'react';
import styles from './../../style/BodyStyles/SubBody.module.css';
import UpcomingMovies from './SubBody/UpcomingMovies';
import UpcomingMoviesSkeleton from './SubBody/UpcomingMoviesSkeleton';
import Arrow from './BodyComponents/DefaultBodyComponents/Arrow';

export const getUpcomingMoviesSkeleton = () => {
    let itemsToReturn = [];
    for(let i = 0; i < 4; i++) {
        itemsToReturn.push(<UpcomingMoviesSkeleton key={i} />);
    }
    return itemsToReturn;
}

const SubBody = () => {
    let timeOut = 0;
    let parentReference = useRef();
    let leftValue = 0;
    const [showArrow , setShowArrow] = useState(false);
    const [upcomingMovie, setUpcomingMovie] = useState(false);
    const url = 'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5002ad4149mshf478c6676d5c5edp1132a8jsn221eddda86aa',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
const moveMovies = () => {
    leftValue = parentReference.current.scrollLeft + 270;
    parentReference.current.scrollTo({
        left: leftValue,
        behavior: "smooth"
      });    
}

const moveMoviesLeft = () => {
    leftValue = parentReference.current.scrollLeft - 270;
    parentReference.current.scrollTo({
        left: leftValue,
        behavior: "smooth"
      });
}

const toggleArrow = () => {
    if(window.innerWidth <= 950)
        setShowArrow(true);
    else
        setShowArrow(false);
}
    useEffect(() => {
        window.addEventListener('resize', toggleArrow);
        toggleArrow();
        fetch(url, options)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setUpcomingMovie(data.slice(0,1));
        })
        .catch((error) => {
            console.log('error occured during fetching a title Id  for upcoming movies', error);
        })
        return() => {
            window.removeEventListener('resize', toggleArrow);
        }
    }, []);

    return (
        <div className={styles['sub-body']}>
            <div className={styles.upcomingMoviesHeader}>Upcoming Movies</div>
            <div className={styles['upcoming-movies-container']} ref={parentReference}>
            {
                upcomingMovie
                ? upcomingMovie.map((movieTitle, index) => {
                    timeOut += 500;
                    let title = movieTitle.id.split('/')[2];
                    return <UpcomingMovies title={title} releaseDate={movieTitle.releaseDate ? movieTitle.releaseDate : 'coming soon'} timeOut={timeOut} key={index}/>
                })
                : getUpcomingMoviesSkeleton()
            }
            </div>
            { showArrow && <Arrow moveMovies={moveMovies} moveMoviesLeft={moveMoviesLeft} movieContainer={parentReference} />}
        </div>
    )
}
export default SubBody;