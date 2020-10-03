import * as React from 'react';
import { shallow } from 'enzyme';

import Card from './CarouselCard';

describe('Card', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Card {...defaultProps} />);
    });
});
