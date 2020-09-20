import * as React from 'react';
import { Whatwedotab } from '../Whatwedotab/Whatwedotab';
import house from '../../assets/house.svg';
import schedule from '../../assets/schedule.svg';
import customerservice from '../../assets/customerservice.svg';

import './Whatwedo.css';

const Whatwedo = () => {
    return (
        <div>
            <section className="MainBannerId">
                <h2 className="HeaderBanner"> What We Provide?</h2>
                <div className="whatwedotab-wrapper">
                    {whatwebdotabs.length
                        ? whatwebdotabs.map((whatwedotab) => (
                              <Whatwedotab
                                  key={whatwedotab.title}
                                  title={whatwedotab.title}
                                  description={whatwedotab.description}
                                  svg={whatwedotab.svg}
                              />
                          ))
                        : null}
                </div>
            </section>
        </div>
    );
};

const whatwebdotabs = [
    {
        id: 1,
        title: 'Quality Accomodation',
        description:
            'We offer modern high-quality appartment at good price. Our apartments are  conviniently located at the central of Ho Chi Minh city',
        svg: house,
    },
    {
        id: 2,
        title: 'Easy Inspection Schedule',
        description:
            'We provide customer inspection service just by the clicks of buttons. Customer will be informed of all information needed during the inspection',
        svg: schedule,
    },
    {
        id: 3,
        title: 'Superior Customer service',
        description:
            'At Truong An, we always strive to offer the best customer service. We know finding a place to settle down can be a frurstrating tiring process',
        svg: customerservice,
    },
    {
        id: 4,
        title: 'Superior Customer Service',
        description:
            'At Truong An, we always strive to offer the best customer service. We know finding a place to settle down can be a frurstrating tiring process',
        svg: customerservice,
    },
    {
        id: 5,
        title: 'Superior Customer Service',
        description:
            'At Truong An, we always strive to offer the best customer service. We know finding a place to settle down can be a frurstrating tiring process',
        svg: customerservice,
    },
    {
        id: 6,
        title: 'Superior Customer Service',
        description:
            'At Truong An, we always strive to offer the best customer service. We know finding a place to settle down can be a frurstrating tiring process',
        svg: customerservice,
    },
];
export { Whatwedo };
