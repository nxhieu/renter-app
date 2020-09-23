import * as React from 'react';
import './Whatwedotab.css';

interface IWhatwedotabprops {
    title: string;
    description: string;
    svg: any;
}

const Whatwedotab = ({ title, description, svg }: IWhatwedotabprops) => {
    return (
        <div className="tab-wrapper">
            <img src={svg} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export { Whatwedotab };
