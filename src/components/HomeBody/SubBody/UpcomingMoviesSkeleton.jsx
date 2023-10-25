import styles from './../../../style/BodyStyles/SubBody.module.css';

const UpcomingMoviesSkeleton = () => {

    return(
        <div className={styles.UpcomingMoviesSkeleton}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonName}></div>
            <div className={styles.skeletonReleaseDate}></div>
        </div>
    )
}

export default UpcomingMoviesSkeleton;