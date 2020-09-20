import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { configureStore } from '../shared/store';
import App from '../shared/App';
import IntlProvider from '../shared/i18n/IntlProvider';
import createHistory from '../shared/store/history';

// declare global {
//     interface Window {
//         INITIAL_STATE: any;
//     }
// }

// window.INITIAL_STATE = window.INITIAL_STATE || {};

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
console.log(window.INITIAL_STATE);

const store = configureStore({
    initialState: window.INITIAL_STATE,
});

hydrate(
    <Provider store={store}>
        <Router history={history}>
            <IntlProvider>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </IntlProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store) {
        window.store = store;
    }
}
