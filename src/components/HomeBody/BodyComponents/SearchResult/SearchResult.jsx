import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSkeleton } from "../GenreComponents/GetMovies";
import GetSingleMovieById from "../GenreComponents/GetSingleMovieById";
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
const SearchResult = () => {
    const {searchValue} = useParams();
    console.log(searchValue);
    console.log(useParams());
    const [titleIds, setTitleIds] = useState(false);
    let timeOut = 0;
    const url = `https://imdb8.p.rapidapi.com/title/find?q=${searchValue}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59689d85b6msh26ad0cac83f8cb3p1c0870jsn5b6b9821a000',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

    useEffect(() => {
        setTitleIds(false);
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setTitleIds(data.results.slice(0, 4));
        })
    }, [searchValue]);

    return(
        <div className={styles['get-movie-container']} >
        {titleIds
        ? titleIds.map((movieTitle, index) => {
            let title = movieTitle.id.split('/')[2];
            timeOut += 350;
            console.log('title', title);
            if(title[0] == 't')
                return <GetSingleMovieById title={title} url={url} options={options} timeOut={timeOut} key={index}/>
            else
                return <div key={index}>Hii</div>
        })
        : getSkeleton()
        }
        </div>
    )
}

export default SearchResult;