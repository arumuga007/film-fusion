import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styles from './../../style/NavBarStyle.module.css';
import DefaultBodyContent from '../HomeBody/BodyComponents/DefaultBodyContent';
import UpcomingFeatures from '../UpcomingFeatures/UpcomingFeatures';
const Menus = () => {
    return(
        <BrowserRouter>
        <div className={styles['menu-container']}>
            <Link to="/film-fusion">Movies</Link>
            <Link to="/watch-list">WatchList</Link>
            <Link to="/profile" className={styles['profile-container']}>
                <i class="fa-solid fa-user"></i>
            </Link>
            <Routes>
            <Route path="/film-fusion" element={<DefaultBodyContent />} />
            <Route path="/watch-list" element={<UpcomingFeatures />} />
            <Route path="/profile" element={<UpcomingFeatures />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Menus;