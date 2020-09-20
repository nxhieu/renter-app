import React from 'react';
import axios from 'axios';
import './LoginButton.css';

const LoginButton = ({
    isAuthenticated,
    isLoginButtonClicked,
    onLoginButtonClicked,
}: {
    isAuthenticated: boolean;
    isLoginButtonClicked: boolean;
    onLoginButtonClicked: () => void;
}) => {
    return (
        <button onClick={onLoginButtonClicked} className="button-login">
            {isAuthenticated ? ' log out' : 'Log in'}
        </button>
    );
};

const apiCalls = async (): Promise<void> => {
    const reponse = await axios({ method: 'get', url: 'http://localhost:8080/callBack' });
    console.log(reponse.data);
};

export { LoginButton };
