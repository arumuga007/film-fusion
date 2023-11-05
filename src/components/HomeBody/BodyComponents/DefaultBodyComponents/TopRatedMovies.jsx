import MovieContainerTemplate from "./MovieContainerTemplate";
const TopRatedMovies = () => {
    let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies';
    let apikey = '92aeafde89msh695189c171337d3p14b571jsnc34752824632';
    return(<MovieContainerTemplate url={url} className='toprated-movie-container' type='topRatedTvShows' apikey={apikey} />)
}

export default TopRatedMovies;