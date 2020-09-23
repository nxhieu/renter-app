import * as React from 'react';
import './Roomcarousel.css';
import banner from '../../assets/banner.jpg';

const Roomcarousel = (props) => {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active" />
                <li data-target="#demo" data-slide-to="1" />
                <li data-target="#demo" data-slide-to="2" />
            </ul>
            <div className="carousel-inner overflow-hidden">
                <div className="carousel-item overflow-hidden w-100 active">
                    <img src={banner} className="d-block " alt="Los Angeles" />
                </div>
                <div className="carousel-item overflow-hidden w-100">
                    <img src={banner} className="d-block " alt="Chicago" />
                </div>
                <div className="carousel-item overflow-hidden w-100">
                    <img src={banner} className="d-block " alt="New York" />
                </div>
            </div>

            <a className="carousel-control-prev overflow-hidden" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next overflow-hidden" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    );
};

export { Roomcarousel };
