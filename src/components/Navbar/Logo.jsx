import { Link } from 'react-router-dom';
import styles from './../../style/NavBarStyle.module.css';

const Logo = () => {
    return(
        <Link to='/film-fusion' className={styles['logo-container']}>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} className={styles['logo']}></img>
        </Link>
    )
}

export default Logo;