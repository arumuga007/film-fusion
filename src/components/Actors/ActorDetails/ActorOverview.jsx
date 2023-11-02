import { useActorContext } from "../GetActor";
import styles from './../../../style/BodyStyles/MovieDetails.module.css';
import { imageNotFound } from "../../../GlobalConstants/GlobalConstant";

const ActorOverview = () => {
    const {actorDetail} = useActorContext();
    let location = false;
    if(actorDetail.birthPlace)
        location = actorDetail.birthPlace.split(',');
    return (
        <div className={styles['movie-overview-container']}>
            <div className={styles['image-container']} style={{backgroundImage: `url(${actorDetail.image ? actorDetail.image.url : imageNotFound})`}}>
                
            </div>
            <div className={styles['movie-info-container']}>
                <div className={styles['movie-title-container']}>
                    <div className={styles['movie-title']}>{actorDetail.name}</div>
                   {actorDetail.gender && <div className={styles['actor-sub-title']}>{actorDetail.gender == 'female' ? 'Actress' : 'Actor'}</div>}
                </div>
                {actorDetail.birthPlace && <div className={styles['actor-birth-place']}><span>Birth Place : </span>{actorDetail.birthPlace}</div>}
               {actorDetail.heightCentimeters && <div className={styles['actor-heigjt']}><span>Height : </span>{actorDetail.heightCentimeters}<span style={{opacity: '1', fontSize: '0.9rem'}}> cm</span></div>}
                <div className={styles['dob-location-container']}>
                {actorDetail.birthDate && 
                    <div className={styles['dob-container']}>
                    <div className={styles['dob-icon-container']}>
                        <i class="fa-solid fa-cake-candles"></i>
                    </div>
                   <div className={styles['actor-DOB']}>{actorDetail.birthDate}</div>
                    </div>
                    }
                    {location && <div className={styles['location-container']}>
                        <div className={styles['location-icon-container']}>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                            <div className={styles['location']}>
                                {location[location.length - 1]}
                            </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ActorOverview;