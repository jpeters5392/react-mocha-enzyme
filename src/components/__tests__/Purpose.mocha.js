import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Purpose from '../Purpose.jsx';

describe('Purpose', () => {
    it('should render a p', () => {
        const wrapper = shallow(<Purpose purpose="MockPurpose" />);
        expect(wrapper.find('p')).to.have.length(1);
    });

    it('should render the purpose inside of the p', () => {
        const wrapper = shallow(<Purpose purpose="MockPurpose" />);
        const p = wrapper.find('p').first();
        expect(p.text()).to.equal("MockPurpose");
    });
});