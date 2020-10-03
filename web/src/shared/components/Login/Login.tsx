import React, { useState } from 'react';
import LoginButton from './LoginButton/LoginButton';
import './Login.css';

const Login = ({
    isLoginButtonClicked,
    onLoginButtonClicked,
}: {
    isLoginButtonClicked: boolean;
    onLoginButtonClicked: () => void;
}): JSX.Element => {
    return (
        <div className="loginButton_wrapper">
            <LoginButton onLoginButtonClicked={onLoginButtonClicked} />
        </div>
    );
};

export { Login };
