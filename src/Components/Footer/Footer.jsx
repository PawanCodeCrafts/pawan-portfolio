import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">


            <div className="footer-inner">
                <div className="footer-links">
                    <a href="https://github.com/PawanCodeCrafts" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/pawan-preet/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <span>•</span>
                    <a href="#contact">
                        Hire Me
                    </a>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()}  Made with &nbsp; <FaHeart className="heart" /> &nbsp; by Pawan
                </p>
            </div>


        </footer>
    );
};

export default Footer;
