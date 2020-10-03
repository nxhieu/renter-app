import * as React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<LoginForm {...defaultProps} />);
    });
});
