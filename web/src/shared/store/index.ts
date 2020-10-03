import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware, compose, AnyAction } from 'redux';
import axios, { AxiosInstance } from 'axios';
import { RootState, createRootReducer } from './rootReducer';

type StoreParams = {
    initialState?: { [key: string]: any };
    middleware?: any[];
};

export const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    console.log(initialState);
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8500/api',
    });

    const mw: ThunkMiddleware<RootState, AnyAction, AxiosInstance> = thunk.withExtraArgument(
        axiosInstance
    );

    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(...[mw].concat(...middleware)))
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () =>
                store.replaceReducer(require('./rootReducer').default)
            );
        }
    }

    return store;
};

export default configureStore;
