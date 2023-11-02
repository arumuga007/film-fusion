import {Link} from "react-router-dom";
import styles from './../../style/BodyStyles/SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeadline}>Genre</div>
            <Link to='/film-fusion/action-movies'>Action</Link>
            <Link to='/film-fusion/horror-movies'>Horror</Link>
            <Link to='/film-fusion/comedy-movies'>Comedy</Link>
            <Link to='/film-fusion/crime-movies'>Crime</Link>
            <Link to='/film-fusion/drama-movies'>Drama</Link>
            <Link to='/film-fusion/history-movies'>History</Link>
            <Link to='/film-fusion/mystery-movies'>Mystery</Link>
            <Link to='/film-fusion/romantic-movies'>Romantic</Link>
            <Link to='/film-fusion/science-movies'>Science</Link>
            <Link to='/film-fusion/thriller-movies'>Thriller</Link>
            <div className={styles.sidebarHeadline}>Actor</div>
            <Link to='/film-fusion/popular-actors'>Popular actors</Link>
            <Link to='/film-fusion/born-today-actors'>Born today</Link>

        </div>
    )
}
export default SideBar;