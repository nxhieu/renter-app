import * as React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import google from '../../assets/google.svg';
import { GOOGLE_AUTH_URL_INSPECTION } from '../../../constants';
import './LoginForm.css';

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            '&:focus, &:hover, &:visited, &:link, &:active': {
                textDecoration: 'none',
            },
        },
    })
);

const LoginForm = () => {
    const classes = useStyles();
    return (
        <div className="form-auth-container">
            <form className="form-auth">
                <h3>Sign in to book for inspection !</h3>
                <Link type="button" className={classes.link} href={GOOGLE_AUTH_URL_INSPECTION}>
                    <Button variant="contained" color="primary" fullWidth={true}>
                        <img className="icon" src={google.toString()} />
                        <h4>Google</h4>
                    </Button>
                </Link>
            </form>
        </div>
    );
};

export default LoginForm;
