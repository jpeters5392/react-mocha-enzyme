import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AppName from '../AppName.jsx';

describe('AppName', () => {
    it('should render an h1', () => {
        const wrapper = shallow(<AppName appName="MockAppName" />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

    it('should render the app name inside of the h1', () => {
        const wrapper = shallow(<AppName appName="MockAppName" />);
        const h1 = wrapper.find('h1').first();
        expect(h1.text()).to.equal("MockAppName");
    });
});