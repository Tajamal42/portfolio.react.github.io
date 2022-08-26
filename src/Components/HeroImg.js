import React from "react";
import "./HeroImgStyles.css";
import IntroImg from '../assets/banner.jpg';
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
              <img className="intro-img" src={IntroImg} />
            </div>
            <div className="content">
                <p>Hi, I'M A FREELANCER</p>
                <h1>React Developer</h1>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    );
};

export default HeroImg;