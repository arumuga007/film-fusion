import { Link } from 'react-router-dom';
import styles from './../../style/NavBarStyle.module.css';
import { useEffect, useRef } from 'react';



const Menus = () => {
    const movieRef = useRef();
    const watchListRef = useRef();

    const changeMenuItemColor = (event) => {
        movieRef.current.style.color = 'white';
        watchListRef.current.style.color = 'white';
        event.target.style.color = '#BD43E7';
    }

    useEffect(() => {
        movieRef.current.style.color = '#BD43E7';
        movieRef.current.addEventListener('click', changeMenuItemColor);
        watchListRef.current.addEventListener('click', changeMenuItemColor);
    }, [])

    return(
        <div className={styles['menu-container']}>
            <Link to="/film-fusion" className={`${styles['menu-item']}`} ref={movieRef}>Movies</Link>
            <Link to="/watch-list" className={styles['menu-item']} ref={watchListRef} >WatchList</Link>
            <Link to="/profile" className={styles['profile-container']}>
                <i class="fa-solid fa-user"></i>
            </Link>
        </div>
    )
}

export default Menus;