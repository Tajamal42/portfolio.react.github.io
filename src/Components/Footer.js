import "./FooterStyles.css";

import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer bg-dark text-light py-3">
            <div className="footer-container">
                <div className="left">
                    <h4>Contact Me</h4>
                    <div className="location">
                        <div>
                            <p><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 4 Blanford St, Arundel QueensLand Australia</p>
                        </div>
                    </div>
                    <div className="location">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +92-451-662064
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> tajamal.azan@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>This is me Tajamal Hussain. Senior Web Developer. I enjoy discussing new Projects and design Challenges.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
            <p className="text-center">Copyright &copy; Tajamal Hussain</p>
        </div>
    )
}


