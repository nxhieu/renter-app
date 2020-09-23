import * as express from 'express';
import axios from 'axios';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createRootReducer } from '../../shared/store/rootReducer';
import { configureStore } from '../../shared/store';

const getStore = (_req: express.Request) => {
    const axiosInstance = axios.create({
        baseURL: 'http://auth-service:8080',
        headers: { cookie: _req.get('cookie') || '' },
    });
    const composeEnhancers = compose;
    // configureStore({});
    const store = createStore(
        createRootReducer(),
        {},
        composeEnhancers(applyMiddleware(...[thunk.withExtraArgument(axiosInstance)]))
        // applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};

export default getStore;
