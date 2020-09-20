import { combineReducers } from 'redux';
import app from './app/reducer';
import auth from './auth/reducer';

const createRootReducer = () =>
    combineReducers({
        app: app,
        auth: auth,
    });

export default createRootReducer;

// export combineReducers
