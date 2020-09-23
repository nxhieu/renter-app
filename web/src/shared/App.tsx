// import React, { Suspense } from 'react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, Switch } from 'react-router-dom';
// import { connect }
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from 'store/rootReducer';
import favicon from '../shared/assets/favicon.png';
import { Topnav } from './components/Topnav';
import { Banner } from './components/Banner';
import { Authmodal } from './components/Authmodal';
import { AuthRequest } from './store/auth/actions';
import { OAuth2RedirectHandler } from './components/OAuth2RedirectHandler/OAuth2RedirectHandler';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './pages/Home';
import InspectionPage from './pages/Inspection';
// import Page2 from './pages/Page-2';
import routes from './routes';
import css from './App.module.css';

interface Props extends PropsFromRedux {}

const App: React.FC<any> = (props: Props) => {
    const [isLoginButtonClicked, setLoginButtonClicked] = useState<boolean>(false);

    const onLoginButtonClicked = (): void => {
        setLoginButtonClicked(!isLoginButtonClicked);
    };

    const onLoginButtonClickedSetFalse = (): void => {
        setLoginButtonClicked(false);
    };

    return (
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="Truong An"
                titleTemplate="Truong An"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            {isLoginButtonClicked ? (
                <Authmodal
                    onLoginButtonClickedSetFalse={onLoginButtonClickedSetFalse}
                    isLoginButtonClicked={isLoginButtonClicked}
                    message=""
                />
            ) : null}
            <Topnav
                title={'Truong An'}
                isLoginButtonClicked={isLoginButtonClicked}
                onLoginButtonClicked={onLoginButtonClicked}
            />
            <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route
                    exact
                    path={routes.inspection}
                    render={() => (props.auth.authenticated ? <InspectionPage /> : <LoginForm />)}
                />
                {/* // <Route exact path={routes.page2} component={Page2} /> */}
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
                <Route render={() => '404!'} />
            </Switch>
        </div>
    );
};

export function loadData({
    dispatch,
}: {
    dispatch: ThunkDispatch<any, any, AnyAction>;
}): Promise<void> {
    return dispatch(AuthRequest());
}

function mapStateToProps(state: RootState) {
    return { auth: state.auth };
}

function mapDispatch() {
    return { AuthRequest: AuthRequest };
}

const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
