import { Link } from 'react-router-dom';
import styles from './../../style/MobileNavBar.module.css';
import { useEffect } from 'react';


const MobileNavBar = () => {

    useEffect((() => {
        // let navItems = window.document.querySelectorAll('.MobileNavBar_navbar-items__JncE\+');
        // console.log('navitem', navItems);
    }), [])
    

    return (
        <div className={styles['mobile-navbar-container']}>
            <Link to='/film-fusion/' className={styles['navbar-items']}>
            <i class="fa fa-home" aria-hidden="true"></i>
            </Link>
            <Link to='/categories' className={styles['navbar-items']}>
            <i class="fa-solid fa-film"></i>
            </Link>
            <Link to='/watch-list' className={styles['navbar-items']}>
            <i class="fa-solid fa-bookmark"></i>
            </Link>
            <Link to='/profile' className={styles['navbar-items']}>
            <i class="fa-solid fa-user"></i>
            </Link>
        </div>
    )
}

export default MobileNavBar;