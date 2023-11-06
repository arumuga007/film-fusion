import styles from './../../style/Categories.module.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className={styles['categories-container']}>
            <Link to='/film-fusion/action-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/actionMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Action</div>
                    <div className={styles['description']}>Action-packed Blockbuster Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/drama-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/History.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Drama</div>
                    <div className={styles['description']}>Compelling Human Stories</div>
                </div>
            </Link>

            <Link to='/film-fusion/romantic-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/romanticMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Romantic</div>
                    <div className={styles['description']}>Heartwarming Love Stories</div>
                </div>
            </Link>
            <Link to='/film-fusion/thriller-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/Thriller.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Thriller</div>
                    <div className={styles['description']}>Heart-Pounding Thriller Adventures</div>
                </div>
            </Link>
            <Link to='/film-fusion/comedy-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/comedyMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Comedy</div>
                    <div className={styles['description']}>Feel-Good Comedic Entertainment</div>
                </div>
            </Link>
            <Link to='/film-fusion/science-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/scienceMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Science</div>
                    <div className={styles['description']}>Mind-Bending Sci-Fi Adventures</div>
                </div>
            </Link>
            <Link to='/film-fusion/crime-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/crimeMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Crime</div>
                    <div className={styles['description']}>Dark and Compelling Stories</div>
                </div>
            </Link>
            <Link to='/film-fusion/horror-movies' className={styles['category-item']}>
                <img src={process.env.PUBLIC_URL + '/images/Category/horrorMovie.jpg'} />
                <div className={styles['image-cover']}>
                    <div className={styles['title']}>Horror</div>
                    <div className={styles['description']}>Spine-Tingling Terror Adventures</div>
                </div>
            </Link>
        </div>
    )
}

export default Categories;