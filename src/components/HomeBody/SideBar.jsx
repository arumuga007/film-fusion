import {Link} from "react-router-dom";
import styles from './../../style/BodyStyles/SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeadline}>Genre</div>
            <Link to='/action-movies'>Action</Link>
            <Link to='/horror-movies'>Horror</Link>
            <Link to='/comedy-movies'>Comedy</Link>
            <Link to='/crime-movies'>Crime</Link>
            <Link to='/drama-movies'>Drama</Link>
            <Link to='/history-movies'>History</Link>
            <Link to='/mystery-movies'>Mystery</Link>
            <Link to='/romantic-movies'>Romantic</Link>
            <Link to='/science-movies'>Science</Link>
            <Link to='/thriller-movies'>Thriller</Link>
            <div className={styles.sidebarHeadline}>Actor</div>
            <Link to='/topmovies'>Popular actors</Link>
            <Link to='/topmovies'>Born today</Link>

        </div>
    )
}
export default SideBar;