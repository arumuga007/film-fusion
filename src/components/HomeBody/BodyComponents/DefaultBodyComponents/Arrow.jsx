import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import { useRef, useEffect } from "react";

const Arrow = (props) => {
    const rightArrow = useRef();
    const leftArrow = useRef();

    const movieContainerScroll = () => {
        let totalWidth = props.movieContainer.current.scrollLeft + props.movieContainer.clientWidth;
        if(totalWidth + 10 >= props.movieContainer.current.scrollWidth)
          rightArrow.current.style.display = 'none';
        else
          rightArrow.current.style.display = 'block';
        if(props.movieContainer.current.scrollLeft > 0)
            leftArrow.current.style.display = 'block';
        else 
            leftArrow.current.style.display = 'none';
    }

    useEffect(() => {
        leftArrow.current.style.display = 'none';
        rightArrow.current.addEventListener('click', props.moveMovies);
        leftArrow.current.addEventListener('click', props.moveMoviesLeft);
        props.movieContainer.current.addEventListener('scroll', movieContainerScroll);
    },[]);
    return (
        <>
            <div className={styles.rightArrowContainer}>
                <i class="fa fa-angle-right" ref={rightArrow} ></i>
            </div>
            <div className={styles.leftArrowContainer}>
                <i class="fa fa-angle-left" ref={leftArrow} className={styles.leftArrow}></i>
            </div>
        </>
    )
}

export default Arrow;