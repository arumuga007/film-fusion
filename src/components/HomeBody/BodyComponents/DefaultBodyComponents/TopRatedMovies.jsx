import MovieContainerTemplate from "./MovieContainerTemplate";
const TopRatedMovies = () => {
    let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies';
    let apikey = 'f205f3410dmsh190cd8919f9a65ap1376ebjsnd9169a12b50e';
    return(<MovieContainerTemplate url={url} className='toprated-movie-container' type='topRatedTvShows' apikey={apikey} />)
}

export default TopRatedMovies;