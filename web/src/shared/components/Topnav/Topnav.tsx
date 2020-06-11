import * as React from 'react';
import { ReactComponent as Reactlogo } from '../../assets/react.svg';
import css from '../../App.module.css';

const Topnav = ({ title }: { title: string }): JSX.Element => {
    return (
        <div>
            <h1>
                <Reactlogo className={css.reactLogo} /> title
            </h1>
        </div>
    );
};

export default Topnav;
