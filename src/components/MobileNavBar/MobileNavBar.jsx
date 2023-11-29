import { Link, useLocation } from 'react-router-dom';
import styles from './../../style/MobileNavBar.module.css';
import { useEffect, useState } from 'react';

const MobileNavBar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    // Extract the pathname from the location object
    const currentPath = location.pathname;

    // Map the paths to corresponding menu names
    const pathToMenuMap = {
      '/film-fusion/': 'home',
      '/categories': 'categories',
      '/watch-list': 'watch-list',
      '/profile': 'profile',
    };

    // Set the active menu based on the current path
    setActiveMenu(pathToMenuMap[currentPath] || '');

  }, [location.pathname]);

  return (
    <div className={styles['mobile-navbar-container']}>
      <Link to='/film-fusion/' className={`${styles['navbar-items']} ${activeMenu === 'home' ? styles['active'] : ''}`}>
        <i className="fa fa-home" aria-hidden="true"></i>
      </Link>
      <Link to='/categories' className={`${styles['navbar-items']} ${activeMenu === 'categories' ? styles['active'] : ''}`}>
        <i className="fa-solid fa-film"></i>
      </Link>
      <Link to='/watch-list' className={`${styles['navbar-items']} ${activeMenu === 'watch-list' ? styles['active'] : ''}`}>
        <i className="fa-solid fa-bookmark"></i>
      </Link>
      <Link to='/profile' className={`${styles['navbar-items']} ${activeMenu === 'profile' ? styles['active'] : ''}`}>
        <i className="fa-solid fa-user"></i>
      </Link>
    </div>
  );
}

export default MobileNavBar;
