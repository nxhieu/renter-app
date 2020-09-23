import * as React from 'react';
import google from '../../assets/google.svg';
import {
    GOOGLE_AUTH_URL,
    GOOGLE_AUTH_URL_INSPECTION,
    FACEBOOK_AUTH_URL,
    GITHUB_AUTH_URL,
} from '../../../constants';
const LoginForm = (props) => {
    return (
        <div>
            <a
                type="button"
                className="d-flex align-content-center btn btn-primary btn-block  button"
                href={GOOGLE_AUTH_URL_INSPECTION}
            >
                <img className="icon" src={google.toString()} />
                <h4>Google</h4>
            </a>
        </div>
    );
};

export default LoginForm;
