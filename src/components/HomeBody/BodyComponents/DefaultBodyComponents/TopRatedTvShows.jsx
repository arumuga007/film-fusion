import MovieContainerTemplate from "./MovieContainerTemplate";
let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows';
const TopRatedTvShows = () => {
    let apiKey = 'f205f3410dmsh190cd8919f9a65ap1376ebjsnd9169a12b50e';
    return (
        <MovieContainerTemplate url={url} className='toprated-tvshow-container' type='topRatedTvShows' apikey={apiKey} />
    )
}

export default TopRatedTvShows;