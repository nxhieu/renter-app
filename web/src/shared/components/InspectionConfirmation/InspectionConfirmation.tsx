import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { RootState } from '../../store/rootReducer';
import routes from '../../routes';
import './InspectionConfirmation.css';

interface Props extends PropsFromRedux {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            '&:focus, &:hover, &:visited, &:link, &:active': {
                textDecoration: 'none',
            },
        },
    })
);

const InspectionConfirmation = (props: Props) => {
    const classes = useStyles();

    return (
        <div className="container-confirmation">
            <form className="form-confirmation">
                <h3>
                    Here is your confirmation. An email will be sent to confirm with you shortly !
                </h3>
                <div />
                <TextField
                    disabled
                    id="email"
                    label="email"
                    defaultValue={props.inspection.email !== '' ? props.inspection.email : null}
                    value={props.inspection.email}
                    variant="filled"
                />
                <TextField
                    disabled
                    id="Name"
                    label="Name"
                    defaultValue={props.inspection.name !== '' ? props.inspection.name : null}
                    value={props.inspection.name}
                    variant="filled"
                />
                <TextField
                    disabled
                    id="Date"
                    label="Date"
                    defaultValue={props.inspection.date ? props.inspection.date : null}
                    value={props.inspection.date}
                    variant="filled"
                />
                <Link type="button" className={classes.link} href={routes.home}>
                    <Button variant="contained" color="primary" fullWidth={true}>
                        Back To Main Page
                    </Button>
                </Link>
            </form>
        </div>
    );
};

function mapStateToProps(state: RootState) {
    return { auth: state.auth, inspection: state.inspection };
}

function mapDispatch() {
    return null;
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(InspectionConfirmation);
