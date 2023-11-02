import { useEffect, useState } from "react";
import { getSkeleton } from "../HomeBody/BodyComponents/GenreComponents/GetMovies";
import styles from './../../style/BodyStyles/GenreComponentStyle.module.css';
const GetActor = (props) => {
    let url = `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${props.actorId}`;
    const [actorDetail, setActorDetail] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            fetch(url, props.options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setActorDetail(data);
            })
        }, props.timeOut)
        
    }, []);
    return(
        <>
            {
                actorDetail
                ?   <div className={styles['single-movie-container']}>
                <div className={styles['image-container']}>
                    <img src={actorDetail.image.url} className={styles.image} ></img>
                </div>
                <div className={styles.name}>{actorDetail.name}</div>
                
            </div>
                : getSkeleton()
            }
        </>
    )
}

export default GetActor;