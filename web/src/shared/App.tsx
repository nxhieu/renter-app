// import React, { Suspense } from 'react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, Switch } from 'react-router-dom';
// import favicon from '../shared/assets/favicon.png';
import { Topnav } from './components/Topnav';
import { Banner } from './components/Banner';
import { Authmodal } from './components/Authmodal';
import Home from './pages/Home';
import Page1 from './pages/Page-1';
import Page2 from './pages/Page-2';
import routes from './routes';
import css from './App.module.css';

const App: React.FC<any> = () => {
    const [isLoginButtonClicked, setLoginButtonClicked] = useState<boolean>(false);
    if (!isLoginButtonClicked) {
        console.log('sd');
    }
    const onLoginButtonClicked = (): void => {
        setLoginButtonClicked(!isLoginButtonClicked);
    };

    return (
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="Truong An"
                titleTemplate="Truong An"
                // link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <Authmodal />
            {/* <ReactLogo className={css.reactLogo} /> Renter */}
            <Topnav
                title={'Truong An'}
                isLoginButtonClicked={isLoginButtonClicked}
                onLoginButtonClicked={onLoginButtonClicked}
            />
            <Banner />
            <button />
            {/* <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route exact path={routes.page1} component={Page1} />
                <Route exact path={routes.page2} component={Page2} />
                <Route render={() => '404!'} />
            </Switch> */}
            {/* <h2>Headline</h2>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/page-1">page 1</Link>
                </li>
                <li>
                    <Link to="/page-2">page 2</Link>
                </li>
            </ul> */}
        </div>
    );
};

export default App;
