import * as React from 'react';
import { shallow } from 'enzyme';

import Oauthpopup from './Oauthpopup';

describe('Oauthpopup', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<Oauthpopup {...defaultProps} />);
    });
});
