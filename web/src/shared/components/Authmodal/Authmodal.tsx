import React, { createRef, useEffect, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../../constants';
import google from '../../assets/google.svg';
import './Authmodal.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            '&:focus, &:hover, &:visited, &:link, &:active': {
                textDecoration: 'none',
            },
        },
    })
);

interface authModalProps {
    onLoginButtonClickedSetFalse: () => void;
    isLoginButtonClicked: Boolean;
    message: string;
}

const Authmodal = ({
    onLoginButtonClickedSetFalse,
    isLoginButtonClicked,
    message,
}: authModalProps): JSX.Element => {
    const wrapperRef = createRef<HTMLDivElement>();
    const classes = useStyles();
    // bind handler click outside to dom
    useEffect(() => {
        document.addEventListener('click', handlerClickOutside, false);
        return () => {
            document.removeEventListener('click', handlerClickOutside, false);
        };
    });

    //bind handler click inside to dom
    const handlerClickOutside = (event: any) => {
        // if click on the element and not the child element
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onLoginButtonClickedSetFalse();
        }
    };

    const openOauth = (): void => {
        window.open(GOOGLE_AUTH_URL);
    };

    return (
        <Fragment>
            <div className="background-authmodal" />
            <div className="wrapper-side-authmodal">
                <div className="wrapper-vertical-authmodal">
                    <div className="authmodal" ref={wrapperRef}>
                        <div className="close-tag" onClick={onLoginButtonClickedSetFalse} />
                        <h3 className="title">Sign in to</h3>
                        <div className="col text-center">
                            <Link className={classes.link} href={GOOGLE_AUTH_URL}>
                                <Button variant="contained" color="primary" fullWidth={true}>
                                    {/* <link rel="stylesheet" href="" /> */}
                                    <img className="icon" src={google.toString()} />
                                    <h4>Google</h4>
                                </Button>
                            </Link>
                            <p> {message.length !== 0 ? message : message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { Authmodal };
