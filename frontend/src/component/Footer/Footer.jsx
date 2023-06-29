import React from 'react';
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="social-link">
                    <span>
                        <BsYoutube />
                    </span>
                    <span>
                        <BsTwitter />
                    </span>
                    <span>
                        <BsInstagram />
                    </span>
                    <span>
                        <FaFacebookF />
                    </span>
                    <span>
                        <FaTiktok />
                    </span>
                </div>
                <div className="button">
                    <button>LOG IN</button>
                    <button className="red">SIGN UP</button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="lefft">
                    <ul>
                        <li>Download the App</li>
                        <li>Accessibility</li>
                        <li>Contact Us</li>
                        <li>Job & Careers</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Terms of Use</li>
                        <li>Terms & Conditions of Sales</li>
                        <li>Anti-slavery</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="right">
                    <span>©2023 Manchester United FC Ltd</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
