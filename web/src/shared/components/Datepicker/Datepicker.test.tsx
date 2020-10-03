import * as React from 'react';
import { shallow } from 'enzyme';

import Datepicker from './Datepicker';

describe('Datepicker', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Datepicker {...defaultProps} />);
    });
});
