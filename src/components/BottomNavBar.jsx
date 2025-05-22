import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNavBar() {
    const baseStyle = 'flex-1 text-center py-3 text-sm';
    const active = 'text-blue-600 font-bold';
    const inactive = 'text-gray-500';

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex border-t z-50">
            <NavLink to="/home" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                🏠 Home
            </NavLink>
            <NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                📊 Stats Dashboard
            </NavLink>
            <NavLink to="/map" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                🗺️ Map
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                ⚙️ Settings
            </NavLink>
            <NavLink to="/aqi-info" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                👤 Info
            </NavLink>
        </nav>
    );
}
