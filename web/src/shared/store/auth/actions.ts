import { AxiosInstance } from 'axios';

export const ActionTypes = {
    AUTH_REQUEST: 'react-ssr-setup/auth/request',
    AUTH_SUCCESS: 'react-ssr-setup/auth/success',
    AUTH_FAILURE: 'react-ssr-setup/auth/failure',
    AUTH_INVALIDATE: 'react-ssr-setup/auth/invalidate',
    AUTH_MODAL_STATE: 'react-ssr-setup/auth/closeAuthModal',
};

export const AuthRequest = () => async (dispatch, getState, api: AxiosInstance) => {
    try {
        const authRes = await api.get('/user/me');
        dispatch({
            type: ActionTypes.AUTH_SUCCESS,
            payload: authRes.data,
        });
    } catch (error) {
        dispatch(AuthFailure());
    }
};

// export const AuthSuccess = (items: Auth[]) => ({
//     type: ActionTypes.AUTH_SUCCESS,
//     payload: {
//         items,
//         updatedAt: Number(Date.now()),
//     },
// });

export const AuthFailure = () => ({
    type: ActionTypes.AUTH_FAILURE,
});

export const AuthInvalidate = () => async (dispatch, getState, api: AxiosInstance) => {
    try {
        const authRes = await api.get('/user/logout');
        dispatch({
            type: ActionTypes.AUTH_INVALIDATE,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.AUTH_INVALIDATE,
        });
    }
};

// export const AuthModalState = () => {
//     type: ActionTypes.AUTH_MODAL_STATE,
// }
