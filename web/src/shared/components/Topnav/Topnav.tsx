import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../assets/react.svg';
import { Login } from '../Login';
import './topnav.css';
import css from '../../App.module.css';

const Topnav = ({ title }: { title: string }): JSX.Element => {
    return (
        <div className="top-banner">
            <div className="hambuger-bar" />
            <Link to="/" className="link-normal">
                <div className="logo">
                    <img src={svg} />
                    <h1 className="brand"> {title} </h1>
                </div>
                {/* <div className="catch-sentence">High quality living</div> */}
            </Link>
            <nav className="Main-nav"> </nav>
            <Login />
        </div>
    );
};

export { Topnav };
