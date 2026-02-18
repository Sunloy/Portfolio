import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiGrid, FiList, FiBriefcase, FiBook, FiLayers, FiLayout, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const navigate = useNavigate();

    const links = [
        { path: '/', label: 'Dashboard', icon: <FiGrid /> },
        { path: '/skills', label: 'Skills', icon: <FiList /> },
        { path: '/experience', label: 'Experience', icon: <FiBriefcase /> },
        { path: '/education', label: 'Education', icon: <FiBook /> },
        { path: '/services', label: 'Services', icon: <FiLayers /> },
        { path: '/work', label: 'Work', icon: <FiLayout /> },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col shadow-xl">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-xl font-bold tracking-wider">PORTFOLIO <span className="text-blue-500">ADMIN</span></h1>
            </div>
            <nav className="flex-1 p-4 space-y-1">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                    >
                        {link.icon}
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors"
                >
                    <FiLogOut />
                    Logout
                </button>
            </div>

            <div className="p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
                v1.1.0
            </div>
        </aside>
    );
};

export default Sidebar;
