import * as React from 'react';
import { Redirect } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
    return (
        <Redirect
            to={{
                pathname: '/',
            }}
        />
    );
};

export { OAuth2RedirectHandler };
