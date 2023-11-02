import styles from './../../../../style/NoMatchFound.module.css'
import { useNavigate } from 'react-router-dom';

const NoMatchFound = () => {
    const Navigate = useNavigate();
    return (
        <div className={styles['no-match-found-container']} >
            <div className={styles['image']} style={{background: `url(${process.env.PUBLIC_URL + '/images/ResultNotFound.jpg'})`}}>

            </div>
            <div className={styles['body-container']}>
                <div className={styles['title']}>Something looks fishy</div>
                <div className={styles['description']}>
                    But not exactly what you were looking for.
                    <br></br>
                    We're so sorry about this.
                </div>
            </div>
            <button className={styles['btn']} onClick={() => Navigate('/film-fusion')}>start over</button>
        </div>
    )
}

export default NoMatchFound;