import React, { useState, createRef, useEffect, Fragment } from 'react';
import google from '../../assets/google.svg';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../../constants';
import './Authmodal.css';

interface authModalProps {
    onLoginButtonClickedSetFalse: () => void;
    isLoginButtonClicked: Boolean;
}

const Authmodal = ({
    onLoginButtonClickedSetFalse,
    isLoginButtonClicked,
}: authModalProps): JSX.Element => {
    const wrapperRef = createRef<HTMLDivElement>();

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
                            <a
                                type="button"
                                className="d-flex align-content-center btn btn-primary btn-block  button"
                                href={GOOGLE_AUTH_URL}
                                // onClick={openOauth}
                            >
                                <img className="icon" src={google} />
                                <h4>Google</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { Authmodal };
