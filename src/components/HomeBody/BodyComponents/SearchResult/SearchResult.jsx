import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSkeleton } from "../GenreComponents/GetMovies";
import GetSingleMovieById from "../GenreComponents/GetSingleMovieById";
import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
import NoMatchFound from "./NoMatchFound";
import GetActor from "../../../Actors/GetActor";
const SearchResult = () => {
    const {searchValue} = useParams();
    const [titleIds, setTitleIds] = useState(false);
    const [noResultFound, setNoResultFound] = useState(false);
    let timeOut = 0;
    const url = `https://imdb8.p.rapidapi.com/title/find?q=${searchValue}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab9812db4emshea295be64618310p18f90ejsn0399c2bad76e',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
    };
    const actorOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ab9812db4emshea295be64618310p18f90ejsn0399c2bad76e',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    useEffect(() => {
        setTitleIds(false);
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            if(!data.results) {
                setNoResultFound(true);
                return;
            }
            setNoResultFound(false);
            if(data.results.length >= 4)
                setTitleIds(data.results.slice(0, 4));
            else if(data.results)
                setTitleIds(data.results);
        })
    }, [searchValue]);
    if(noResultFound)
        return <NoMatchFound />

    return(
        <div className={styles['get-movie-container']} >
        {titleIds
        ? titleIds.map((movieTitle, index) => {
            let title = movieTitle.id.split('/')[2];
            timeOut += 350;
            if(title[0] == 't')
                return <GetSingleMovieById title={title} url={url} options={options} timeOut={timeOut} key={index}/>
            else
                return <GetActor actorId={title} timeOut={timeOut} key={index} options={actorOptions} />
        })
        : getSkeleton()
        }
        </div>
    )
}

export default SearchResult;