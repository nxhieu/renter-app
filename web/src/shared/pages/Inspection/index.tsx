import * as React from 'react';
import InspectionForm from '../../components/InspectionForm/InspectionForm';
import css from './Page-1.module.css';

const InspectionPage: React.FC<any> = () => {
    // const classes = useStyles();
    return (
        <div className={css.wrapper}>
            <InspectionForm />
        </div>
    );
};

export default InspectionPage;
