import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import CardSlider from './CardSection';

const Banner = () => {
    return (
        <div className="banner">
            <video className="banner__video" autoPlay loop muted playsInline>
                <source src="./assets/banner/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="banner__content">
                <p>Experience the difference</p>
                <h1>Dive into Epic Adventures</h1>
                <button className='explore-btn'>
                    EXPLORE
                </button>
                <div className='icons'>
                    <InstagramIcon />
                    <FacebookOutlinedIcon />
                    <XIcon />
                </div>
            </div>

            <div className="banner__overlay">
                <h1 className="banner__heading">Our Gaming World</h1>
                <CardSlider />
            </div>
        </div>
    );
};

export default Banner;
