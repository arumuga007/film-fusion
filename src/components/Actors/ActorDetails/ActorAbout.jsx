import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import { useActorContext } from '../GetActor';
const ActorAbout = () => {
    const {actorDetail} = useActorContext();
    return(
        <div className={styles['story-line-container']}>
            <div className={styles['story-line-header']}>About</div>
            {   actorDetail.miniBios
                ? <div className={styles['story-line-content']}>{actorDetail.miniBios[0].text}</div>
                : <div className={styles['story-line-content']}>No data available about this actor</div>
            }
        </div>
    )
}

export default ActorAbout;