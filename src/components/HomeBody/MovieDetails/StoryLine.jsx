import style from './../../../style/BodyStyles/MovieDetails.module.css';
import { useMyContext } from '../BodyComponents/GenreComponents/GetSingleMovieById';
const StoryLine = () => {
    const {movie} = useMyContext();
    return (
        <div className={style['story-line-container']}>
            <div className={style['story-line-header']}>StoryLine</div>
            <div className={style['story-line-content']}>{movie.plotSummary ? movie.plotSummary.text : 'Storyline not availble'}</div>
        </div>
    )
}
export default StoryLine;