import React from 'react';
import Cookies from 'universal-cookie';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { AuthInvalidate } from '../../../store/auth/actions';
import { RootState } from '../../../store/rootReducer';
import './LoginButton.css';
import { AppDispatch } from '../../../../client';

interface Props extends PropsFromRedux, RouteComponentProps<any> {
    onLoginButtonClicked: () => void;
}

const cookies = new Cookies();

const LoginButton = (props: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const logout = async (): Promise<void> => {
        await dispatch(props.AuthInvalidate());
        props.history.push('/');
    };

    return (
        <button
            onClick={() =>
                props.auth.authenticated === false ? props.onLoginButtonClicked() : logout()
            }
            className="button-login"
        >
            {props.auth.authenticated ? ' log out' : 'Log in'}
        </button>
    );
};

function mapStateToProps(state: RootState) {
    return { auth: state.auth };
}

function mapDispatch() {
    return { AuthInvalidate };
}

const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(LoginButton));
