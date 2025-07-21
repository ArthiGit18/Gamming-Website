
import React, { useState, useEffect, useRef } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const cardData = [
    {
        title: 'VR GAMES',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '1.3K',
        image: '/assets/vr.jpg',
    },
    {
        title: "ENTER IN ESPORT'S",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '1.3K',
        image: '/assets/esports.jpg',
    },
    {
        title: 'CONSOLE GAMES',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '4.3K',
        image: '/assets/console.jpg',
    },
    {
        title: 'CONSOLE GAMES',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '4.3K',
        image: '/assets/console.jpg',
    },
    {
        title: 'CONSOLE GAMES',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '4.3K',
        image: '/assets/console.jpg',
    },
    {
        title: 'CONSOLE GAMES',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '4.3K',
        image: '/assets/console.jpg',
    },
    {
        title: 'CONSOLE GAMES',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: '4.3K',
        image: '/assets/console.jpg',
    },
    // Add more cards if needed
];

const CardSlider = () => {

   const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const startAutoScroll = () => {
        if (!sliderRef.current) return;
        intervalRef.current = setInterval(() => {
            sliderRef.current.scrollLeft += 1;
            if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
                sliderRef.current.scrollLeft = 0;
            }
        }, 20);
    };

    const stopAutoScroll = () => clearInterval(intervalRef.current);

    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, []);
    return (
        <div className="card-slider"
            ref={sliderRef}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
        >
             {[...cardData, ...cardData].map((card, index) => (
                <div className="game-card" key={index}>
                    <img src={card.image} alt={card.title} className="game-image" />
                    <div className="card-content">
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                        <div className="card-footer">
                            <div className="likes">
                                <FavoriteBorderIcon fontSize="small" />
                                <span>{card.likes}</span>
                            </div>
                            <button className="explore-btn">EXPLORE</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardSlider;
