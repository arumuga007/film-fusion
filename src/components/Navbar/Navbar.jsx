import styles from './../../style/NavBarStyle.module.css';
import Logo from './Logo';
import Menus from './Menus';
import SearchBar from './SearchBar';

const Navbar = () => {
    return(
        <div className={styles['navbar-container']}>
            <Logo />
            <SearchBar />
            <Menus />
        </div>
    )
}

export default Navbar;