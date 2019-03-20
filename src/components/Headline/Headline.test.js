/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Headline from './Headline';
import { testForElement } from '../../../Utils/index';

const createComponent = (props = {}) => {
    var component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('props testing for Headline Component', () => {
        it('should render with proper propTypes', () => {
            const expectedProps = {
                heading: 'test heading',
                desc: 'test desc'
            }
            const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
            expect(propsErr).toBeUndefined()
        })
    })


    let component;
    beforeEach(() => {
        component = createComponent()
    })

    it('should render without errors', () => {
        var element = testForElement(component, 'headline-component');
        expect(element.length).toBeGreaterThanOrEqual(1)
    })
})
