import React, { useState } from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router';
import { connect, ConnectedProps, useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form, FormikErrors } from 'formik';
import { AppDispatch } from '../../../client';
import { InspectionRequest } from '../../store/adminAuth/actions';
import { RootState } from '../../store/rootReducer';

interface FormValues {
    id: string;
    password: string;
}

const AdminAuth = (props) => {
    const [isSubmited, setSubmited] = useState<boolean>(false);

    const handleSubmit = async (formValues: FormValues) => {
        // await dispatch(props.InspectionRequest(formValues));
        setSubmited(true);
    };

    if (isSubmited) {
        props.history.push('admin/inspection');
    }

    return (
        <div className="container">
            <Formik
                initialValues={{
                    id: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form className="form-inspection">
                        <h3>Admin Authentication</h3>
                        <TextField
                            id="Id"
                            label="Id"
                            value={props.values.id}
                            onChange={props.handleChange}
                        />
                        <TextField
                            id="Password"
                            label="Password"
                            type="password"
                            value={props.values.password}
                            onChange={props.handleChange}
                        />
                        <Button type="submit" color="primary" variant="contained">
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AdminAuth;
