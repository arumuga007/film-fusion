import styles from './../../style/NavBarStyle.module.css';

const SearchBar = () => {
    return(
        <div className={styles['searchbar-container']}>
            <input type="text" className={styles.searchbar} placeholder='Search any movies or actors'></input>
            <div className={styles['icon-container']}>
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;