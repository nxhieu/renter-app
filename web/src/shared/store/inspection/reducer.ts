import { produce } from 'immer';
import { InspectionState, Action } from './types';
import { ActionTypes } from './actions';

//   email: string;
//   name: string;
//   date: Date;
export const initialState = {
    id: null,
    email: '',
    name: '',
    date: null,
};

export default (state: InspectionState = initialState, action: Action): InspectionState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.INSPECTION_SUCCESS: {
                draft.id = action.payload.id;
                draft.email = action.payload.email;
                draft.name = action.payload.name;
                draft.date = action.payload.date;
                return;
            }
            case ActionTypes.INSPECTION_FAILURE: {
                draft.id = null;
                draft.email = '';
                draft.name = '';
                draft.date = null;
                return;
            }
            case ActionTypes.INSPECTION_CONFIRMATION_SUCCESS: {
                console.log('Pleasseeee do someee thinggggg');
                draft.id = action.payload.id;
                draft.email = action.payload.email;
                draft.name = action.payload.name;
                draft.date = action.payload.date;
                return;
            }
        }
    });
