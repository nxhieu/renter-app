import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../assets/react.svg';
import { Login } from '../Login';
import './topnav.css';

interface topNavProps {
    title: String;
    isLoginButtonClicked: boolean;
    onLoginButtonClicked: () => void;
}

const Topnav = ({
    title,
    isLoginButtonClicked,
    onLoginButtonClicked,
}: topNavProps): JSX.Element => {
    return (
        <div className="top-banner">
            <div className="hambuger-bar" />
            <Link to="/" className="link-normal">
                <div className="logo">
                    <img src={svg.toString()} />
                    <h1 className="brand"> {title} </h1>
                </div>
            </Link>
            <nav className="Main-nav"> </nav>
            <Login
                isLoginButtonClicked={isLoginButtonClicked}
                onLoginButtonClicked={onLoginButtonClicked}
            />
        </div>
    );
};

export default Topnav;
