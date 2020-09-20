import * as React from 'react';
import { shallow } from 'enzyme';

import OAuth2RedirectHandler from './OAuth2RedirectHandler';

describe('OAuth2RedirectHandler', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<OAuth2RedirectHandler {...defaultProps} />);
    });
});
