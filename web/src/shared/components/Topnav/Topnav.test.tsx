import * as React from 'react';
import { shallow } from 'enzyme';

import { Topnav } from './Topnav';

describe('Topnav', () => {
    it('tests something', () => {
        const component = shallow(<Topnav title={'hieu dep trai'} />);
        expect(component).toMatchSnapshot();
    });
});
