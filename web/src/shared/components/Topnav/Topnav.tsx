import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../assets/react.svg';
import { Login } from '../Login';
import './topnav.css';

const Topnav = ({
    title,
    isLoginButtonClicked,
    onLoginButtonClicked,
}: {
    title: string;
    isLoginButtonClicked: boolean;
    onLoginButtonClicked: () => void;
}): JSX.Element => {
    return (
        <div className="top-banner">
            <div className="hambuger-bar" />
            <Link to="/" className="link-normal">
                <div className="logo">
                    <img src={svg} />
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

export { Topnav };
