import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DefaultBodyContent from './BodyComponents/DefaultBodyContent';
import TopRated from './BodyComponents/TopRated';
import SideBar from './SideBar';
import styles from './../../style/BodyStyles/BodyContent.module.css';
const BodyContent = () => {
  return (
    <>
    <BrowserRouter>
    <SideBar />
    <div className={styles.bodyContentContainer}>
      <Routes>
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/topmovies" element={<DefaultBodyContent />} />
        <Route path="/film-fusion" element={<DefaultBodyContent />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
};

export default BodyContent;
