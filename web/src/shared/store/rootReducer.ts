import { combineReducers } from 'redux';
import app from './app/reducer';
import auth from './auth/reducer';

// const rootReducer = combineReducers({
//     app: app,
//     auth: auth,
// });

export const createRootReducer = () =>
    combineReducers({
        app: app,
        auth: auth,
    });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

// export default createRootReducer;

// export combineReducers
