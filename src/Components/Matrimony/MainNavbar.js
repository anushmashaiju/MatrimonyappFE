import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notifications from './Pages/Notifications'; // Assuming Notifications is the component you provided
import './MainNavbar.css'; // Ensure this file includes the new styles
import '../Matrimony/Pages/Notifications.css';


function MainNavbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showBranchNavbar, setShowBranchNavbar] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showAlertBox, setShowAlertBox] = useState(false); // New state for alert box
    const [notificationContent, setNotificationContent] = useState(''); // New state for alert content
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
        // Simulate fetching notifications
        setNotificationContent(<Notifications />);
        setShowAlertBox(true);
    };

    const handleCloseAlertBox = () => {
        setShowAlertBox(false);
    };
    const handleSearchClick = () => {
        setShowSearchBar(!showSearchBar);
    };
    return (
        <>
            {showAlertBox && (
                <div className={`alert-box ${!showAlertBox ? 'hide' : ''}`}>
                    <div className="alert-content">
                        {notificationContent}
                    </div>
                    <button className="close-alert" onClick={handleCloseAlertBox}>×</button>
                </div>
            )}
            <nav className="mainnavbar">
                <div className="container3">
                    <div className="mainnavbar-brand" onClick={() => handleNavigate('/homelist')}>
                        Matrimony
                    </div>
                    <div className="mainnavbar-toggle" onClick={toggleNavbar}>
                        ☰
                    </div>
                    <div className={`mainnavbar-collapse ${isNavOpen ? 'show' : ''}`} id="basic-navbar-nav">
                        <ul className="mainnav">
                            <li className="mainnav-item"><a onClick={() => handleNavigate('/homelist')}>Home</a></li>
                            <li className="mainnav-item"><a onClick={handleNotificationClick}>Notification</a></li>
                            <li className="mainnav-item"><a onClick={() => handleNavigate('/chatpage')}>Chat</a></li>
                            <li className="mainnav-item"><a onClick={handleSearchClick}>Search</a></li>

                            <li className="mainnav-item dropdown">
                                <a className="dropdown-toggle">Settings</a>
                                <div className="dropdown-menu">
                                    <a onClick={() => handleNavigate('/create')}>Create</a>
                                    <a onClick={() => handleNavigate('/preference')}>Preference</a>
                                    <a onClick={() => handleNavigate('/subscription')}>Upgrade Now</a>
                                    <div className="dropdown-divider"></div>
                                    <a onClick={() => handleNavigate(`/profile`)}>Profile</a>
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
