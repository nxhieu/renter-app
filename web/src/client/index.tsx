import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import App from '../shared/App';
import IntlProvider from '../shared/i18n/IntlProvider';
import createHistory from '../shared/store/history';
import { configureStore } from '../shared/store';
import { RootState } from '../shared/store/rootReducer';
import theme from './theme';

// declare global {
//     interface Window {
//         INITIAL_STATE: any;
//     }
// }

window.INITIAL_STATE = window.INITIAL_STATE || {};

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
console.log(window.INITIAL_STATE, 'sdsdsd');

const store = configureStore({
    initialState: window.INITIAL_STATE,
});

// export type Store = typeof store;s

export type AppDispatch = ThunkDispatch<any, any, AnyAction>;

function Main() {
    useEffect(() => {
        const jssStyles: any = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
}

hydrate(
    <Provider store={store}>
        <Router history={history}>
            <IntlProvider>
                <HelmetProvider>
                    <Main />
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
