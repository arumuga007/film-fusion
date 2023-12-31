import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DefaultBodyContent from './BodyComponents/DefaultBodyContent';
import SideBar from './SideBar';
import styles from './../../style/BodyStyles/BodyContent.module.css';
import GetMovies from './BodyComponents/GenreComponents/GetMovies';
import SearchResult from './BodyComponents/SearchResult/SearchResult';
import Actors from '../Actors/Actors';
import SubBody from './SubBody';

const BodyContent = () => {
  console.log('body content called');
  return (
    <>
    <SideBar />
    <div className={styles['content-subody-container']}>
    <div className={styles.bodyContentContainer}>
      <Routes>
        <Route path="/" element={<DefaultBodyContent/>} />
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
        <Route path='/popular-actors' element = {<Actors type={'popularActors'} />} key='popularActors' />
        <Route path='/born-today-actors' element = {<Actors type={'bornTodayActors'} />} key='bornTodayActors' />
      </Routes>
      </div>
      <SubBody />
      </div>
    </>
  );
};

export default BodyContent;
