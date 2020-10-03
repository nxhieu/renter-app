import * as React from 'react';
import { shallow } from 'enzyme';

import InspectionForm from './InspectionForm';

describe('InspectionForm', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<InspectionForm {...defaultProps} />);
    });
});
