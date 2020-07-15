import React, { Fragment } from 'react';
import google from '../../assets/google.svg';
import './Authmodal.css';

const Authmodal = (): JSX.Element => {
    return (
        <Fragment>
            <div className="background-authmodal" />
            <div className="wrapper-side-authmodal">
                <div className="wrapper-vertical-authmodal">
                    <div className="authmodal">
                        <div className="close-tag" />
                        <h3 className="title">Sign in to</h3>
                        <div className="col text-center">
                        <button
                            type="button"
                            className="d-flex align-content-center btn btn-primary btn-block  button"
                        >
                            <img className="icon" src={google} />
                            <h4>
                            Google
                            </h4>                       
                        </button>

                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export { Authmodal };
