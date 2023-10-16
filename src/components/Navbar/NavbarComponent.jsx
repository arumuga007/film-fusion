import Logos from './Logos';
import SearchBar from './SearchBar';
import Profile from './Profile';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
const NavbarComponent = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/logos" element={<Logos />}></Route>
                <Route path="/Search" element={<SearchBar />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
            </Routes>
       </BrowserRouter>
    )
}
export default NavbarComponent;