import { useRef, useState } from 'react';
import styles from './../../style/NavBarStyle.module.css';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const navigate = useNavigate();
    const inputElement = useRef();
    const invalidInput = useRef();
    const iconContainer = useRef();
    const [inputValue, setInputValue] = useState('');
    function searchUsingEnter(event) {
        if(event.key == 'Enter')
            search()
    }

    const search = () => {
        setInputValue(inputElement.current.value);
        if(!inputValue) {
            invalidInput.current.style.bottom = '0px';
            inputElement.current.style.boxShadow = '0px 0px 10px 0px #f00';
        }
        else {
            invalidInput.current.style.bottom = '-30%';
            inputElement.current.style.boxShadow = 'none';
            navigate(`/film-fusion/search-movie/${inputValue}`);
        }
    }

    return(
        <div className={styles['searchbar-container']} >
            <input type="text" className={styles.searchbar} placeholder='Search any movies or actors' ref={inputElement} onKeyUp={(event) => searchUsingEnter(event)}></input>
            <div className={styles['icon-container']} onClick={search} ref={iconContainer}>
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className={styles['invalid-input']} ref={invalidInput}>• input cannot be empty</div>
        </div>
    )
}

export default SearchBar;