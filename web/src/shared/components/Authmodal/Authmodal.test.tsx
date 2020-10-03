import * as React from 'react';
import { shallow } from 'enzyme';

import Authmodal from './Authmodal';

describe('Authmodal', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Authmodal {...defaultProps} />);
    });
});
