import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import DefaultSkeleton from "./DefaultSkeleton";
const getSkeleton = () => {
    let itemsToReturn = [];
    for(let i = 0; i < 3; i ++) {
        itemsToReturn.push(<DefaultSkeleton />)
    }
    return itemsToReturn
}
const TopRatedMovies = () => {
    return (
        <div className={styles['toprated-movie-container']}>
             {getSkeleton()}   
        </div>
    )
}

export default TopRatedMovies;