import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__addr">
            <h1 className="footer__logo">Your Logo</h1>

            <h2>Contact</h2>

            <address>
            Your address, 123 Avenue, Country<br></br>

            <Link className="footer__btn" to="">Email Us</Link>
            </address>
                <br></br>
                <i className="fa fa-facebook w3-hover-opacity w3-large"></i>
                <i className="fa fa-instagram w3-hover-opacity w3-large"></i>
                <i className="fa fa-twitter w3-hover-opacity w3-large"></i>
        </div>

        <ul className="footer__nav">
            <li className="nav__item">
            <h2 className="nav__title">Rewards</h2>

            <ul className="nav__ul">
                <li>
                <Link to="">Join Now</Link>
                </li>
                <li>
                <Link to="">Learn More</Link>
                </li>
                <li>
                <Link to="">Manage Account</Link>
                </li>
            </ul>
            </li>

            <li className="nav__item">
            <h2 className="nav__title">News & Info</h2>

            <ul className="nav__ul">
                <li>
                <Link to="">Press Releases</Link>
                </li>
                <li>
                <Link to="">About Our Products</Link>
                </li>
                <li>
                <Link to="">Product Support</Link>
                </li>
                <li>
                <Link to="">Product Manuals</Link>
                </li>
                <li>
                <Link to="">Product Registration</Link>
                </li>
                {/* 
                <li>
                <Link to="javascript:void(0)" className="w3-bar-item w3-padding" onclick="document.getElementById('newsletter').style.display='block'">Newsletters</Link> 
                </li>
                */}
            </ul>
            </li>

            <li className="nav__item">
            <h2 className="nav__title">Support</h2>

            <ul className="nav__ul">
                <li>
                <Link to="">FAQ</Link>
                </li>
                <li>
                <Link to="">Help Desk</Link>
                </li>
                <li>
                <Link to="">Forums</Link>
                </li>
            </ul>
            </li>
        </ul>

        <div className="legal">
            <p>&copy; 2022 Copyright.</p>

        </div>
    </footer>
  )

}

export default Footer