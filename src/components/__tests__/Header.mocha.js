import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../Header.jsx';
import AppName from '../AppName.jsx';
import Purpose from '../Purpose.jsx';
import * as Immutable from 'immutable';

describe('Header', () => {
    it('should render an AppName', () => {
        const wrapper = shallow(<Header appName="MockAppName" purpose="MockPurpose" />);
        expect(wrapper.find(AppName)).to.have.length(1);
    });

    it('should pass the appName prop to the AppName component', () => {
        const wrapper = shallow(<Header appName="MockAppName" purpose="MockPurpose" />);
        expect(wrapper.find(AppName).first().props().appName).to.equal("MockAppName");
    });

    it('should render a Purpose', () => {
        const wrapper = shallow(<Header appName="MockAppName" purpose="MockPurpose" />);
        expect(wrapper.find(Purpose)).to.have.length(1);
    });

    it('should pass the purpose prop to the Purpose component', () => {
        const wrapper = shallow(<Header appName="MockAppName" purpose="MockPurpose" />);
        expect(wrapper.find(Purpose).first().props().purpose).to.equal("MockPurpose");
    });

    describe('mapStateToProps', () => {
        it('should set appName from the appName state value', () => {
            const state = Immutable.fromJS({
                appName: 'MockAppName',
                purpose: 'MockPurpose',
            });
            const props = mapStateToProps(state);
            expect(props.appName).to.equal("MockAppName");
        });

        it('should set purpose from the purpose state value', () => {
            const state = Immutable.fromJS({
                appName: 'MockAppName',
                purpose: 'MockPurpose',
            });
            const props = mapStateToProps(state);
            expect(props.purpose).to.equal("MockPurpose");
        });
    });
});
