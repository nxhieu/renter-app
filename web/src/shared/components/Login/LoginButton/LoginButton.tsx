import * as React from 'react';
import './LoginButton.css';

const LoginButton = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    return <button className="button-login">{isAuthenticated ? ' log out' : 'Log in'}</button>;
};

export { LoginButton };
