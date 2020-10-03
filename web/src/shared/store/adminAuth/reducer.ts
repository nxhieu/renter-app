import { produce } from 'immer';
import { AdminAuthState, Action } from './types';
import { ActionTypes } from './actions';

export const initialState = {
    id: null,
    authenticated: false,
};

export default (state: AdminAuthState = initialState, action: Action): AdminAuthState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.ADMIN_AUTH_SUCCESS:
                draft.id = action.payload.id;
                draft.authenticated = true;
                return;
            case ActionTypes.ADMIN_AUTH_FAILURE:
                draft.id = null;
                draft.authenticated = false;
                return;
            default:
                draft.id = null;
                draft.authenticated = false;
                return;
        }
    });
