import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DefaultBodyContent from './BodyComponents/DefaultBodyContent';
import TopRated from './BodyComponents/TopRated';
import SideBar from './SideBar';
import styles from './../../style/BodyStyles/BodyContent.module.css';
import GetMovies from './BodyComponents/GenreComponents/GetMovies';
const BodyContent = () => {
  return (
    <>
    <BrowserRouter>
    <SideBar />
    <div className={styles.bodyContentContainer}>
      <Routes>
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/action-movies" element={<GetMovies category={"action"} key='action'/>} />
        <Route path="/horror-movies" element={<GetMovies category={"horror"} key='horror' />} />
        <Route path="/comedy-movies" element={<GetMovies category={"comedy"} key='comedy' />} />
        <Route path="/crime-movies" element={<GetMovies category={"crime"} key='crime' />} />
        <Route path="/drama-movies" element={<GetMovies category={"drama"} key='drama' />} />
        <Route path="/history-movies" element={<GetMovies category={"history"} key='history' />} />
        <Route path="/mystery-movies" element={<GetMovies category={"mystery"} key='mystery' />} />
        <Route path="/romantic-movies" element={<GetMovies category={"romantic"} key='romantic' />} />
        <Route path="/thriller-movies" element={<GetMovies category={"thriller"} key='thriller' />} />
        <Route path="/film-fusion" element={<DefaultBodyContent />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
};

export default BodyContent;
