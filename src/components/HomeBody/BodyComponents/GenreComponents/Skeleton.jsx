import styles from './../../../../style/BodyStyles/GenreComponentStyle.module.css';
const Skeleton = () => {
    return(
        <div className={styles['skeleton-container']}>
            <div className={styles['skeleton-image']}></div>
            <div className={styles['skeleton-name']}></div>
        </div>
    )
}

export default Skeleton;