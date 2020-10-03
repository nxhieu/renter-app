import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../../store/rootReducer';
import './LoginButton.css';

interface Props extends PropsFromRedux {
    onLoginButtonClicked: () => void;
}

const LoginButton = (props: Props) => {
    return (
        <button
            onClick={() => (props.auth.authenticated === false ? props.onLoginButtonClicked : null)}
            className="button-login"
        >
            {props.auth.authenticated ? ' log out' : 'Log in'}
        </button>
    );
};

function mapStateToProps(state: RootState) {
    return { auth: state.auth };
}

// function mapDispatch(){
//     return {};
// }

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LoginButton);
