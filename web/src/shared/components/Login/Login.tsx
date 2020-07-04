import React, { useState } from 'react';
import { LoginButton } from './LoginButton';
import './Login.css';

const Login = ({
    isLoginButtonClicked,
    onLoginButtonClicked,
}: {
    isLoginButtonClicked: boolean;
    onLoginButtonClicked: () => void;
}): JSX.Element => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

    return (
        <div className="loginButton_wrapper">
            <LoginButton
                isAuthenticated={isAuthenticated}
                isLoginButtonClicked={isLoginButtonClicked}
                onLoginButtonClicked={onLoginButtonClicked}
            />
        </div>
    );
};

export { Login };
