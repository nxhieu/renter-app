import React, { useState } from 'react';
import { LoginButton } from './LoginButton';

const Login = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    return (
        <div className="loginButton_wraper">
            <LoginButton isAuthenticated={authenticated} />
        </div>
    );
};

export { Login };
