// import React, { Suspense } from 'react';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, Switch } from 'react-router-dom';
// import favicon from '../shared/assets/favicon.png';
import { Topnav } from './components/Topnav';
import { Banner } from './components/Banner';
import Home from './pages/Home';
import Page1 from './pages/Page-1';
import Page2 from './pages/Page-2';
import routes from './routes';
import css from './App.module.css';

const App: React.FC<any> = () => {
    return (
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="Truong An"
                titleTemplate="Truong An"
                // link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />

            {/* <ReactLogo className={css.reactLogo} /> Renter */}
            <Topnav title={'Truong An'} />
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
