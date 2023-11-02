import { useActorContext } from "../GetActor";
import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import ActorAbout from "./ActorAbout";
import ActorOverview from "./ActorOverview";

const ActorDetails = () => {
    const {actorDetail, setActor} = useActorContext();
    return(<div className={styles['movie-details-container']}>
    <div className={styles['movie-floating-design']}>
        <img src={process.env.PUBLIC_URL + '/images/bannerImage.jpg'} ></img>
    </div>
        <div className={styles.icon} onClick={() => setActor(false)}>
        <i class="fa fa-angle-left"></i>
        </div>
    <ActorOverview />
    <ActorAbout />
    </div>
)
}

export default ActorDetails;