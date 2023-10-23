import MovieContainerTemplate from "./MovieContainerTemplate";
const TopRatedMovies = () => {
    let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies';
    return(<MovieContainerTemplate url={url} className='toprated-movie-container' type='topRatedTvShows'/>)
}

export default TopRatedMovies;