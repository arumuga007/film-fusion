import styles from './../../style/NavBarStyle.module.css';

const Logo = () => {
    return(
        <div className={styles['logo-container']}>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} className={styles['logo']}></img>
        </div>
    )
}

export default Logo;