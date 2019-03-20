import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import { testForElement } from '../../../Utils/index';

const createComponent = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = createComponent()
    });

    it('should render a header', () => {
        const header = testForElement(component, 'headerComponent')
        expect(header.length).toBeGreaterThanOrEqual(1)
    });

    it('should contain a logo', () => {
        const header = testForElement(component, 'navbar-brand')
        expect(header.length).toBeGreaterThanOrEqual(1)
    })

});
