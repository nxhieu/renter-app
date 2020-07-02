import * as express from 'express';
import axios from 'axios';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createRootReducer from '../../shared/store/rootReducer';
import { configureStore } from '../../shared/store';

const addStore = (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
        headers: { cookie: _req.get('cookie') || '' },
    });

    // configureStore({});
    res.locals.store = createStore(
        createRootReducer(),
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
    next();
};

export default addStore;
