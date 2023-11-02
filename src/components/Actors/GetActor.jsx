import { createContext, useContext, useEffect, useState } from "react";
import { getSkeleton } from "../HomeBody/BodyComponents/GenreComponents/GetMovies";
import styles from './../../style/BodyStyles/GenreComponentStyle.module.css';
import ActorDetails from "./ActorDetails/ActorDetails";
import { imageNotFound } from "../../GlobalConstants/GlobalConstant";

export const  actorDetailsContext = createContext();
export const useActorContext = () => useContext(actorDetailsContext);
const GetActor = (props) => {
    let url = `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${props.actorId}`;
    const [actorDetail, setActorDetail] = useState(false);
    const [actor, setActor] = useState(false);
    const [dataFetched, setDataFetched] = useState(1)
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setActor(true);
    }
    useEffect(() => {
        setTimeout(() => {
            fetch(url, props.options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setActorDetail(data);
            })
            .catch((err) => {
                console.log('error occured in fetching actor details', err);
                setDataFetched((dataFetched) => dataFetched + 1)

            })
        }, props.timeOut)
        
    }, [dataFetched]);
    return(
        <>
            {
                actorDetail
                ?   <div className={styles['single-movie-container']} onClick={() => scrollToTop()}>
                <div className={styles['image-container']}>
                    <img src={actorDetail.image ? actorDetail.image.url :imageNotFound } className={styles.image} ></img>
                </div>
                <div className={styles.name}>{actorDetail.name}</div>
                
            </div>
                : getSkeleton()
            }
            <actorDetailsContext.Provider value={{actorDetail, setActor}} >
                {actor && <ActorDetails />}
            </actorDetailsContext.Provider>
        </>
    )
}

export default GetActor;