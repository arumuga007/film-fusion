import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from "./DefaultSkeleton";
import { useEffect,useState, useRef } from "react";
import Arrow from "./Arrow";
import GetPopularMovies from "./GetPopularMovies";

const getskeleton = () => {
    console.log('skeleton called');
    let itemsToReturn = [];
    for(let i = 0; i < 10; i ++) {
        itemsToReturn.push(<DefaultSkeleton key={i} />)
    }
    return itemsToReturn
}

const MovieContainerTemplate = (props) => {
    let leftValue = 0;
    let timeOut = 0;
    let parentReference = useRef();
    const [movies, setMovies] = useState(false);
    const [moviefetched, setMovieFetched] = useState(0);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': props.apikey,
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(props.url, options)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.slice(0,7));
            })
            .catch((err) => {
            console.log('error occured during fetching a data in moviecontainertemplate');
            setMovieFetched(moviefetched + 1);
            });
        }, 1000);
    }, [moviefetched]);

    const moveMovies = () => {
        leftValue = parentReference.current.scrollLeft + 270;
        parentReference.current.scrollTo({
            left: leftValue,
            behavior: "smooth"
          });
        
    }
    
    const moveMoviesLeft = () => {
        leftValue = parentReference.current.scrollLeft - 270;
        parentReference.current.scrollTo({
            left: leftValue,
            behavior: "smooth"
          });
    }

    return(
        <div className={styles[props.className]} id="movieContainers" ref={parentReference}>
            {movies 
             ?
             movies.map((movieTitle, index) => {
                let titleId = movieTitle.id.split('/')[2];
                timeOut += 300;
                return <GetPopularMovies titleId={titleId} apikey={props.apikey} timeOut={timeOut} key={index} />
        })
            : getskeleton()
            }
        <Arrow moveMovies={moveMovies} moveMoviesLeft={moveMoviesLeft} movieContainer={parentReference} />
        </div>
    )
}

export default MovieContainerTemplate;