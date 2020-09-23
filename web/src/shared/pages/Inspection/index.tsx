import * as React from 'react';
import { connect } from 'react-redux';
import { authmodal } from 'components/Authmodal/Authmodal.css';
import { AuthState } from '../../store/auth/types';
import { RootState } from '../../store/rootReducer';
import css from './Page-1.module.css';

const InspectionPage: React.FC<any> = ({ auth }: AuthState) => <div className={css.wrapper} />;

// const mapStateToProps = (state: RootState) => {
//     return state.auth;
// };

// export default connect(mapStateToProps, null)(InspectionPage);

export default InspectionPage;
