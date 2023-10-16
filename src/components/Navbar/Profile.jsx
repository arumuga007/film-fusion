import { Link } from "react-router-dom";
const Profile = ()=>{
    return (
        <div>
            <nav>
                <ul>
                    <Link to='Profile'>
                    <li><Link to='/Movies'>Movies</Link></li>
                    <li><Link to='/TVShows'>TV Shows</Link></li>
                    <li><Link to='/Watchlist'>Watchlist</Link></li>
                    <li><Link to='/Profile_img'><img src="http://localhost:3000/film-fusion/Profile.avif" alt='Profile' className="profile"></img></Link></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Profile;