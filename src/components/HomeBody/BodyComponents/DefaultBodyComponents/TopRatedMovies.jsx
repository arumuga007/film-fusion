import MovieContainerTemplate from "./MovieContainerTemplate";
const TopRatedMovies = () => {
    let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies';
    let apikey = '5c366359camsh43c9051418019b5p107907jsnfeb44e3d70d1';
    return(<MovieContainerTemplate url={url} className='toprated-movie-container' type='topRatedTvShows' apikey={apikey} />)
}

export default TopRatedMovies;