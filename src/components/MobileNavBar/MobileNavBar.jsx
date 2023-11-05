import { Link } from 'react-router-dom';
import styles from './../../style/MobileNavBar.module.css'

const MobileNavBar = () => {

    return (
        <div className={styles['mobile-navbar-container']}>
            <Link to='/film-fusion/' className={styles['navbar-items']}>
            <i class="fa fa-home" aria-hidden="true"></i>
            </Link>
            <Link to='/film-fusion/' className={styles['navbar-items']}>
            <i class="fa-solid fa-film"></i>
            </Link>
            <Link to='/film-fusion/' className={styles['navbar-items']}>
            <i class="fa-solid fa-bookmark"></i>
            </Link>
            <Link to='/film-fusion/' className={styles['navbar-items']}>
            <i class="fa-solid fa-user"></i>
            </Link>
        </div>
    )
}

export default MobileNavBar;