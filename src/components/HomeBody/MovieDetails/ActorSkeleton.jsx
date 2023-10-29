import style from './../../../style/BodyStyles/MovieDetails.module.css';
const GetActorSkeleton = () => {
    return(
        <div className={style['actor-skeleton-container']}>
            <div className={style['actor-skeleton-image']}></div>
            <div className={style['actor-skeleton-name']}></div>
        </div>
    )
}

export default GetActorSkeleton;