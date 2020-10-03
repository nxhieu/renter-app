import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../store/rootReducer';
import InspectionConfirmationForm from '../../components/InspectionConfirmation/InspectionConfirmation';
import { confirmationRequest } from '../../store/inspection/actions';

import css from './InspectionConfirmation.css';

interface Props extends PropsFromRedux {}

const InspectionConfirmation: React.FC<any> = (props: Props) => {
    return (
        <div className="asds">
            <InspectionConfirmationForm />
        </div>
    );
};

function mapStateToProps(state: RootState) {
    return { inspection: state.inspection };
}

function mapDispatch() {
    return { confirmationRequest };
}

export function loadDataConfirmation(
    dispatch: ThunkDispatch<any, any, AnyAction>,
    id: string
): Promise<void> {
    console.log(dispatch);
    return dispatch(confirmationRequest(id));
}

const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(InspectionConfirmation);
