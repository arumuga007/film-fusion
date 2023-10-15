import { Link } from 'react-router-dom';
const Profile = ()=>{
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to=''>Movies</Link></li>
                    <li><Link to=''>TV Shows</Link></li>
                    <li><Link to=''>Watchlist</Link></li>
                    <li><Link to=''><img src="http://localhost:3000/film-fusion/Profile.avif" alt='Profile' className="profile"></img></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Profile;