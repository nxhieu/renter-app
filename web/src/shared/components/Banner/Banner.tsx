import * as React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} />
            <h2>Apartment for rent </h2>
            <p>
                An Excellent place for people who are looking for quality living in Ho chi minh city
            </p>
            <Link
                to="/inspection"
                type="button"
                className="btn btn-primary active button-inspection"
                role="button"
                aria-pressed="true"
            >
                Book Inspection
            </Link>
        </div>
    );
};

export { Banner };
