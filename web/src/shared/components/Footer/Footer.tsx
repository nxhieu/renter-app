import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-copyrightMessage">
                <p>Copyright © 2020 Truong An, LLC. All rights reserved</p>
            </div>
            <div className="footer-linkcontainers">
                <Link to="/"> Contact Us</Link>
                <Link to="/"> FAQ</Link>
                <Link to="/"> Blog</Link>
                <Link to="/"> Legal Stuff</Link>
                <Link to="/"> Privacy Policy</Link>
            </div>
        </footer>
    );
};

export { Footer };
