import React, { Fragment } from 'react';
import './Authmodal.css';

const Authmodal = (): JSX.Element => {
    return (
        <Fragment>
            <div className="background-authmodal" />
            <div className="wrapper-side-authmodal">
                <div className="wrapper-vertical-authmodal">
                    <div className="authmodal" />
                </div>
            </div>
        </Fragment>
    );
};

export { Authmodal };
