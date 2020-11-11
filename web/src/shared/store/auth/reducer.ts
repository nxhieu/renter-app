import { produce } from 'immer';
import { AuthState, Action } from './types';
import { ActionTypes } from './actions';

export const initialState = {
    id: null,
    email: '',
    imageUrl: '',
    authenticated: false,
    isAdmin: false,
};

export default (state: AuthState = initialState, action: Action): AuthState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.AUTH_SUCCESS: {
                draft.id = action.payload.id;
                draft.email = action.payload.email;
                draft.imageUrl = action.payload.imageUrl;
                draft.authenticated = true;
                draft.isAdmin = false;
                return;
            }
            case ActionTypes.AUTH_FAILURE: {
                draft.id = null;
                draft.email = '';
                draft.imageUrl = '';
                draft.authenticated = false;
                draft.isAdmin = false;
                return;
            }
            case ActionTypes.AUTH_INVALIDATE: {
                draft.id = null;
                draft.email = '';
                draft.imageUrl = '';
                draft.authenticated = false;
                draft.isAdmin = false;
                return;
            }
        }
    });
