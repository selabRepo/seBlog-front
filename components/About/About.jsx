import React from "react";
import "./_About.scss";
import ImageSlider from "../ImageSlider";
import ScrollButton from "../ScrollButton"


const About = () => {
    return (
        <div className = "About">
            <div className = "About-header">
                <h1> About SElog </h1>
            </div>
            <div className = "About-content">
                <ImageSlider />
            </div>
            <ScrollButton />
        </div>
    );
}

export default About;