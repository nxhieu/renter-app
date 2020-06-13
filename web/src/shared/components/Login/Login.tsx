import React, { useState } from 'react';
import { LoginButton } from './LoginButton';
import './Login.css';

const Login = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    return (
        <div className="loginButton_wrapper">
            <LoginButton isAuthenticated={authenticated} />
        </div>
    );
};

export { Login };
