import MovieContainerTemplate from "./MovieContainerTemplate";
const TopRatedMovies = () => {
    let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies';
    let apikey = '6ab8fdfa38msh4c9b648603dab30p1a3885jsn60dd6301c748';
    return(<MovieContainerTemplate url={url} className='toprated-movie-container' type='topRatedTvShows' apikey={apikey} />)
}

export default TopRatedMovies;