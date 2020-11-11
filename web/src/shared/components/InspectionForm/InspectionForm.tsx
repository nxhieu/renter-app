import 'date-fns';
import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form, FormikErrors } from 'formik';
import { AppDispatch } from '../../../client';
import { InspectionRequest } from '../../store/inspection/actions';
import { RootState } from '../../store/rootReducer';
import routes from '../../routes';
import './InspectionForm.css';

// const useStyles = makeStyles((theme: Theme) => {

// });

interface FormValues {
    email: string;
    userid: Number | null;
    name: string;
    date: Date;
}

interface Props extends PropsFromRedux, RouteComponentProps {}

const InspectionForm = (props: Props) => {
    const [issubmited, setsubmited] = useState<boolean>(false);

    const date = new Date();

    const validate = (values: FormValues) => {
        const errors: FormikErrors<any> = {};
        if (values.date < new Date()) {
            errors.date = 'Day has to be future date';
        }
        return errors;
    };
    const dispatch: AppDispatch = useDispatch();
    const handleSubmit = async (formValues: FormValues) => {
        await dispatch(props.InspectionRequest(formValues));
        setsubmited(true);
    };

    if (issubmited) {
        props.history.push(`inspection${routes.confirmation}/${props.inspection.id}`);
    }

    return (
        <div className="container">
            <Formik
                initialValues={{
                    email: props.auth.email,
                    userid: props.auth.id,
                    name: '',
                    date: new Date(Date.now() + 3600 * 1000 * 24),
                }}
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form className="form-inspection">
                        <h3>Inspection form</h3>
                        <TextField
                            disabled
                            id="email"
                            label="Filled"
                            defaultValue={
                                props.initialValues.email ? props.initialValues.email : null
                            }
                            variant="filled"
                        />
                        <TextField
                            id="name"
                            label="Name"
                            value={props.values.name}
                            onChange={props.handleChange}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date"
                                name="date"
                                label="Inspection Date"
                                minDate={date}
                                value={props.values.date}
                                onChange={(date) => props.setFieldValue('date', date, false)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                            <KeyboardTimePicker
                                margin="normal"
                                id="date"
                                name="date"
                                label="Time"
                                value={props.values.date}
                                onChange={(date) => props.setFieldValue('date', date, false)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <Button type="submit" color="primary" variant="contained">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

function mapStateToProps(state: RootState) {
    return { auth: state.auth, inspection: state.inspection };
}

function mapDispatch() {
    return { InspectionRequest };
}

const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(InspectionForm));
