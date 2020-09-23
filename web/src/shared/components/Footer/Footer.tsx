import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="footer-wrapper-section">
            <div className="footer-wrapper">
                <div className="footer-copyrightMessage">
                    <p>Copyright © 2020 Truong An, LLC. All rights reserved</p>
                </div>
                <div className="footer-linkcontainers">
                    <Link to="/"> Contact Us</Link>
                    <div className="footer-bar" />
                    <Link to="/"> FAQ</Link>
                    <div className="footer-bar" />
                    <Link to="/"> Blog</Link>
                    <div className="footer-bar" />
                    <Link to="/"> Legal Stuff</Link>
                    <div className="footer-bar" />
                    <Link to="/"> Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
