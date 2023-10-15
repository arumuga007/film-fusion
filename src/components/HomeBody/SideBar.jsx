import {Link} from "react-router-dom";
import styles from './../../style/BodyStyles/SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeadline}>Genre</div>
            <Link to='/toprated'>Action</Link>
            <Link to='/topmovies'>Horror</Link>
            <Link to='/topmovies'>Comedy</Link>
            <Link to='/topmovies'>Crime</Link>
            <Link to='/topmovies'>Drama</Link>
            <Link to='/topmovies'>History</Link>
            <Link to='/topmovies'>Mystery</Link>
            <Link to='/topmovies'>Romantic</Link>
            <Link to='/topmovies'>Science</Link>
            <Link to='/topmovies'>Thriller</Link>
            <div className={styles.sidebarHeadline}>Actor</div>
            <Link to='/topmovies'>Popular actors</Link>
            <Link to='/topmovies'>Born today</Link>

        </div>
    )
}
export default SideBar;