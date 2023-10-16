import styles from "./../../../../style/BodyStyles/BodyContent.module.css";

const DefaultSkeleton = () => {
    return (
        <div className={styles.skeletonContainer}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.nameAndRatingContainer}>
        <div className={styles.skeletonName}></div>
        <div className={styles.skeletonRating}></div>
        </div>
        </div>

    )
}

export default DefaultSkeleton;