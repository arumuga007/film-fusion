import { Link } from "react-router-dom";
const SearchBar=()=>{
    return (
        <div>
            <Link to='/Search'><input type="text" placeholder="Search for Movies"></input></Link>
        </div>   
    )
}

export default SearchBar;