import { produce } from 'immer';
import { AuthState, Action } from './types';
import { ActionTypes } from './actions';

export const initialState = {
    id: null,
    email: '',
    imageUrl: '',
    authenticated: false,
};

export default (state: AuthState = initialState, action: Action): AuthState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.AUTH_SUCCESS: {
                // console.log(action.payload.email);
                draft.id = action.payload.id;
                draft.email = action.payload.email;
                draft.imageUrl = action.payload.imageUrl;
                draft.authenticated = true;
                return;
            }
            case ActionTypes.AUTH_FAILURE: {
                draft.id = null;
                draft.email = '';
                draft.imageUrl = '';
                draft.authenticated = false;
                return;
            }
        }
    });