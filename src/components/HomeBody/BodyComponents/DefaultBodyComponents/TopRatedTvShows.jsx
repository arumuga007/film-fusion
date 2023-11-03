import MovieContainerTemplate from "./MovieContainerTemplate";
let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows';
const TopRatedTvShows = () => {
    let apiKey = '6ab8fdfa38msh4c9b648603dab30p1a3885jsn60dd6301c748';
    return (
        <MovieContainerTemplate url={url} className='toprated-tvshow-container' type='topRatedTvShows' apikey={apiKey} />
    )
}

export default TopRatedTvShows;