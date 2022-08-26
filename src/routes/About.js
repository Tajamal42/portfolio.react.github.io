import React from "react";
import HeroImg2 from "../Components/HeroImg2";
import Navbar from "../Components/Navbar";
import AboutContent from "./AboutContent";


const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
            <AboutContent />
        </div>
    )
}

export default About