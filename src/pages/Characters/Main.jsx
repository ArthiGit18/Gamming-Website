import React, { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";


const slides = [
    {
        name: "SKARLET",
        image: "./assets/characters/1 (1).png",
        background: "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)"
    },
    {
        name: "SUB-ZERO",
        image: "./assets/characters/1 (2).png",
        background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"
    },
    {
        name: "SCORPION",
        image: "./assets/characters/1 (3).png",
        background: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"
    },
    {
        name: "FORST",
        image: "./assets/characters/1 (4).png",
        background: "linear-gradient(to right, #fa709a 0%, #fee140 100%)"
    },
];

const Main = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const { name, image, background } = slides[index];

    return (
        <div className="main-hero" style={{ background }}>
            <div className="arrow left" onClick={prevSlide}>
                <ArrowBackIosNew />
            </div>

            <div className="center">
                <img src={image} alt={name} className="logo" />
                <h1>{name}</h1>
            </div>

            <div className="arrow right" onClick={nextSlide}>
                <ArrowForwardIos />
            </div>
        </div>
    );
};

export default Main;
