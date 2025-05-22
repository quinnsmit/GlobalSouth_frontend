import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNavBar() {
    const baseStyle = 'flex-1 text-center py-3 text-sm';
    const active = 'text-blue-600 font-bold';
    const inactive = 'text-gray-500';

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex border-t z-50">
            <NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                🏠 Dashboard
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                👤 Profile
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                ⚙️ Settings
            </NavLink>
            <NavLink to="/home" className={({ isActive }) => `${baseStyle} ${isActive ? active : inactive}`}>
                🏠 Home
            </NavLink>
        </nav>
    );
}
