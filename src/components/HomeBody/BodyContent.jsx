import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DefaultBodyContent from './BodyComponents/DefaultBodyContent';
import SideBar from './SideBar';
import styles from './../../style/BodyStyles/BodyContent.module.css';
import GetMovies from './BodyComponents/GenreComponents/GetMovies';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchResult from './BodyComponents/SearchResult/SearchResult';
const BodyContent = () => {
  console.log('body content called');
  return (
    <>
    <SideBar />
    <div className={styles.bodyContentContainer}>
      <Routes>
        <Route path="action-movies" element={<GetMovies category={"action"} key='action'/>} />
        <Route path="/horror-movies" element={<GetMovies category={"horror"} key='horror' />} />
        <Route path="/comedy-movies" element={<GetMovies category={"comedy"} key='comedy' />} />
        <Route path="/crime-movies" element={<GetMovies category={"crime"} key='crime' />} />
        <Route path="/drama-movies" element={<GetMovies category={"drama"} key='drama' />} />
        <Route path="/history-movies" element={<GetMovies category={"history"} key='history' />} />
        <Route path="/mystery-movies" element={<GetMovies category={"mystery"} key='mystery' />} />
        <Route path="/romantic-movies" element={<GetMovies category={"romantic"} key='romantic' />} />
        <Route path="/science-movies" element={<GetMovies category={"science"} key='science' />} />
        <Route path="/thriller-movies" element={<GetMovies category={"thriller"} key='thriller' />} />
        <Route path='/search-movie/:searchValue' element={<SearchResult />} key='search-result' />
      </Routes>
      </div>
    </>
  );
};

export default BodyContent;
