import MovieContainerTemplate from "./MovieContainerTemplate";
let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows';
const TopRatedTvShows = () => {
    let apiKey = '92aeafde89msh695189c171337d3p14b571jsnc34752824632';
    return (
        <MovieContainerTemplate url={url} className='toprated-tvshow-container' type='topRatedTvShows' apikey={apiKey} />
    )
}

export default TopRatedTvShows;