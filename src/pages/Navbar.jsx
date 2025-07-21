import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-section">
                <AppsIcon className="icon" />
                <span className="menu-text">MENU</span>
                <div className="divider">|</div>
                <SearchIcon className="icon" />
            </div>

            <div className="center-section">
                <span className="title">GAMING.</span>
            </div>

            <div className="right-section">
                <button className="btn">SING IN</button>
                <button className="btn">LOG IN</button>
            </div>
        </div>
    );
};

export default Navbar;
