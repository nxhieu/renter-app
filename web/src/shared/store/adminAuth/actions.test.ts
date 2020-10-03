import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from './reducer';
import * as Actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Your test', () => {
    it('should do something', () => {
        const store = mockStore({ AdminAuth: initialState });
    });
});
