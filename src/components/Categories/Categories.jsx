import styles from './../../style/Categories.module.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className={styles['categories-container']}>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/comedyMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/History.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>

            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/romanticMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/Thriller.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/comedyMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/comedyMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/comedyMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/comedyMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
        </div>
    )
}

export default Categories;