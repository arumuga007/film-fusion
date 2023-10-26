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
        <Route path="/action-movies" element={<GetMovies />} />
        <Route path="/film-fusion" element={<DefaultBodyContent />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
};

export default BodyContent;
