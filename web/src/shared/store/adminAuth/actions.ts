import { AxiosInstance } from 'axios';

export const ActionTypes = {
    ADMIN_AUTH_REQUEST: 'react-ssr-setup/admin-auth/request',
    ADMIN_AUTH_SUCCESS: 'react-ssr-setup/admin-auth/success',
    ADMIN_AUTH_FAILURE: 'react-ssr-setup/admin-auth/failure',
    ADMIN_AUTH_INVALIDATE: 'react-ssr-setup/admin-auth/invalidate',
};

export const AdminAuthRequest = (form) => async (dispatch, getState, api: AxiosInstance) => {
    try {
        const AdminAuthRes = await api.post('admin/auth', form);

        AdminAuthSuccess(AdminAuthRes.data);
    } catch (error) {
        AdminAuthFailure();
    }
};

export const AdminAuthSuccess = (data) => ({
    type: ActionTypes.ADMIN_AUTH_SUCCESS,
    payload: data,
});

export const AdminAuthFailure = () => ({
    type: ActionTypes.ADMIN_AUTH_FAILURE,
});

export const AdminAuthInvalidate = () => ({
    type: ActionTypes.ADMIN_AUTH_INVALIDATE,
});
