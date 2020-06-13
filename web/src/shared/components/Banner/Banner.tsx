import * as React from 'react';
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
        </div>
    );
};

export { Banner };
