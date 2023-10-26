import styles from "./../../../../style/BodyStyles/BodyContent.module.css";
import { useRef, useEffect } from "react";

const Arrow = (props) => {
    const rightArrow = useRef();
    const leftArrow = useRef();

    const movieContainerScroll = (event) => {
        let totalWidth = props.movieContainer.current.scrollLeft + props.movieContainer.current.clientWidth;
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
        const rightArrowClickHandler = () => props.moveMovies();
        const leftArrowClickHandler = () => props.moveMoviesLeft();
        const movieContainerScrollHandler = movieContainerScroll;
    
        if (rightArrow.current) {
            rightArrow.current.addEventListener('click', rightArrowClickHandler);
        }
        if (leftArrow.current) {
            leftArrow.current.addEventListener('click', leftArrowClickHandler);
        }
        if (props.movieContainer.current) {
            props.movieContainer.current.addEventListener('scroll', movieContainerScrollHandler);
        }
    
        // Clean up event listeners when the component unmounts
        return () => {
            if (rightArrow.current) {
                rightArrow.current.removeEventListener('click', rightArrowClickHandler);
            }
            if (leftArrow.current) {
                leftArrow.current.removeEventListener('click', leftArrowClickHandler);
            }
            if (props.movieContainer.current) {
                props.movieContainer.current.removeEventListener('scroll', movieContainerScrollHandler);
            }
        }
    }, []);
    
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