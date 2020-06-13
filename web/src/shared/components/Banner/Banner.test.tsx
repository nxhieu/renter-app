import * as React from 'react';
import { shallow } from 'enzyme';

import Banner from './Banner';

describe('Banner', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Banner {...defaultProps} />);
    });
});
