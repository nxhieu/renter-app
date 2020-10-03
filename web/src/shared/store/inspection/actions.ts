import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AxiosInstance } from 'axios';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import { RootState } from '../rootReducer';

export const ActionTypes = {
    INSPECTION_REQUEST: 'react-ssr-setup/inspection/request',
    INSPECTION_SUCCESS: 'react-ssr-setup/inspection/success',
    INSPECTION_FAILURE: 'react-ssr-setup/inspection/failure',
    INSPECTION_INVALIDATE: 'react-ssr-setup/inspection/invalidate',
    INSPECTION_CONFIRMATION_SUCCESS: 'react-ssr-setup/inspection/confirmation-success',
};

interface Inspection {
    userid: Number | null;
    email: string;
    name: string;
    date: Date;
}

export const InspectionRequest = (data: Inspection) => async (
    dispatch,
    getState,
    api: AxiosInstance
) => {
    try {
        const inspectionRes = await api.post('/inspection/create', data);
        dispatch({
            type: ActionTypes.INSPECTION_SUCCESS,
            payload: inspectionRes.data,
        });
    } catch (error) {
        InspectionFailure();
    }
};

export const InspectionSuccess = (items: Inspection[]) => ({
    type: ActionTypes.INSPECTION_SUCCESS,
    payload: {
        items,
        updatedAt: Number(Date.now()),
    },
});

export const InspectionFailure = () => ({
    type: ActionTypes.INSPECTION_FAILURE,
});

export const InspectionInvalidate = () => ({
    type: ActionTypes.INSPECTION_INVALIDATE,
});

export const confirmationRequest = (id: string) => async (
    dispatch,
    getState,
    api: AxiosInstance
) => {
    try {
        const confirmationRes = await api.get(`inspection/confirmation/${id}`);
        dispatch({
            type: ActionTypes.INSPECTION_CONFIRMATION_SUCCESS,
            payload: confirmationRes.data,
        });
    } catch (error) {
        InspectionFailure();
    }
};
