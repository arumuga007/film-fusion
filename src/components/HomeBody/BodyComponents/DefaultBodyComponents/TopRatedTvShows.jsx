import MovieContainerTemplate from "./MovieContainerTemplate";
let url = 'https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows';
const TopRatedTvShows = () => {
    let apiKey = '5002ad4149mshf478c6676d5c5edp1132a8jsn221eddda86aa';
    return (
        <MovieContainerTemplate url={url} className='toprated-tvshow-container' type='topRatedTvShows' apikey={apiKey} />
    )
}

export default TopRatedTvShows;