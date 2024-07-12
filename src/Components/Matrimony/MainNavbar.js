import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainNavbar.css';
import BranchNavbar from './BranchNavbar';

function MainNavbar({ onNotificationClick }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showBranchNavbar, setShowBranchNavbar] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsNavOpen(false); // Close the navbar when navigating
    };

    const handleLogout = () => {
        // Implement logout logic here, such as clearing session storage, etc.
        navigate('/'); // Example: Redirect to login page after logout
        setIsNavOpen(false); // Close the navbar after logout
    };

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleNotificationClick = () => {
        setShowBranchNavbar(!showBranchNavbar);
    };

    const handleSearchClick = () => {
        setShowSearchBar(!showSearchBar);
    };

    return (
        <>
            <nav className="navbar">
                <div className="container3">
                    <div className="navbar-brand" onClick={() => handleNavigate('/homelist')}>
                        Matrimony
                    </div>
                    <div className="navbar-toggle" onClick={toggleNavbar}>
                        ☰
                    </div>
                    <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`} id="basic-navbar-nav">
                        <ul className="nav">
                            <li className="nav-item"><a onClick={() => handleNavigate('/homelist')}>Home</a></li>
                            <li className="nav-item"><a onClick={() => handleNavigate('/matches')}>Matches</a></li>
                            <li className="nav-item"><a onClick={() => handleNavigate('/mainchat')}>Chat</a></li>
                            <li className="nav-item"><a onClick={handleSearchClick}>Search</a></li>
                            <li className="nav-item"><a onClick={handleNotificationClick}>Notification</a></li>
                            {showBranchNavbar && <BranchNavbar />}
                            <li className="nav-item"><a onClick={() => handleNavigate('/subscription')}>Upgrade Now</a></li>
                            <li className="nav-item"><a onClick={() => handleNavigate('/preference')}>Preference</a></li>
                            <li className="nav-item"><a onClick={() => handleNavigate('/create')}>Create</a></li>
                            <li className="nav-item"><a onClick={() => handleNavigate('/profile')}>Profile</a></li>
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a onClick={() => handleNavigate('/action1')}>Action</a>
                                    <a onClick={() => handleNavigate('/action2')}>Another action</a>
                                    <a onClick={() => handleNavigate('/action3')}>Something</a>
                                    <div className="dropdown-divider"></div>
                                    <a onClick={() => handleNavigate('/action4')}>Separated link</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a className="logout-link" onClick={handleLogout}>Logout</a>
                </div>
            </nav>
            {showSearchBar && (
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            )}
        </>
    );
}

export default MainNavbar;
