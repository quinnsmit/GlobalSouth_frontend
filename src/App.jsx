import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import BottomNavBar from './components/BottomNavBar';
import Home from "./pages/Home.jsx";
import MapPage from "./pages/MapPage.jsx";
import AQIInfoPage from "./pages/AQIInfoPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/home" element={<Home />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/aqi-info" element={<AQIInfoPage />} />
            </Routes>
            <BottomNavBar />
        </Router>
    );
}

export default App;
