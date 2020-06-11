import * as React from 'react';
import { shallow } from 'enzyme';

import Topnav from './Topnav';

describe('Topnav', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Topnav {...defaultProps} />);
    });
});
