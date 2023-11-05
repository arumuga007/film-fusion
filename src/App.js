
import HomeBody from './components/HomeBody/HomeBody';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpcomingFeatures from './components/UpcomingFeatures/UpcomingFeatures';
import MobileNavBar from './components/MobileNavBar/MobileNavBar';
//import UseEffectExample from './components/UseEffectExample';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="/film-fusion/*" element={<HomeBody />} />
            <Route path="/watch-list" element={<UpcomingFeatures />} />
            <Route path="/profile" element={<UpcomingFeatures />} />
      </Routes>
      <MobileNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
