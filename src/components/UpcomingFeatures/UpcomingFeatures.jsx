import styles from './../../style/UpcomingFeatures.module.css';

const UpcomingFeatures = () => {
    return(
        <div className={styles['upcoming-features-container']}>
            <div className={styles['image-container']} style={{background: `url(${process.env.PUBLIC_URL + '/images/upcomingFeature.jpg'})`}}>
                
            </div>
            <div className={styles['body-content']}>
                <div className={styles['title']}>
                    We are working on it
                </div>
                <div className={styles.description}>
                    Great news! We're hard at work on this feature, and it's coming your way soon.<br /> Thanks for your patience and stay tuned for something awesome! 😊🚀
                </div>
                <a className={styles['contribute-btn']} href='mailto:arumugaperumal073@gmail.com'>
                    Wanna Contribute
                </a>
            </div>
        </div>
    )
}

export default UpcomingFeatures;