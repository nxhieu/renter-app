import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { StaticRouter as Router } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import serialize from 'serialize-javascript';
import theme from '../../client/theme';
import IntlProvider from '../../shared/i18n/IntlProvider';
import App from '../../shared/App';
import Html from '../components/HTML';

const helmetContext = {};
const routerContext = {};

const serverRenderer: any = () => (
    req: express.Request,
    res: express.Response,
    store: Store<any>
) => {
    const sheets = new ServerStyleSheets();
    const content = renderToString(
        sheets.collect(
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router location={req.url} context={routerContext}>
                        <IntlProvider>
                            <HelmetProvider context={helmetContext}>
                                <App />
                            </HelmetProvider>
                        </IntlProvider>
                    </Router>
                </Provider>
            </ThemeProvider>
        )
    );

    const css = sheets.toString();
    console.log(store.getState());
    const state = serialize(store.getState());

    return res.send(
        '<!doctype html>' +
            renderToString(
                <Html
                    css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
                    materialuicss={css}
                    helmetContext={helmetContext}
                    scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
                    state={state}
                >
                    {content}
                </Html>
            )
    );
};

export default serverRenderer;
