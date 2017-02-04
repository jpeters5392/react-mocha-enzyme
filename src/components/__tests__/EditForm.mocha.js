import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { EditForm, mapDispatchToProps } from '../EditForm.jsx';
import * as Immutable from 'immutable';
import * as sinon from 'sinon';

describe('EditForm', () => {
    it('should render a div with class of update-app-name', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.find('div.update-app-name')).to.have.length(1);
    });

    it('should render a div with class of update-app-purpose', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.find('div.update-app-purpose')).to.have.length(1);
    });

    it('should have a button inside of the update-app-name div', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.find('div.update-app-name button')).to.have.length(1);
    });

    it('should have a button inside of the update-app-purpose div', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.find('div.update-app-purpose button')).to.have.length(1);
    });

    it('should have a text input inside of the update-app-name div', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.find('div.update-app-name input[type="text"]')).to.have.length(1);
    });

    it('should have a text input inside of the update-app-purpose div', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.find('div.update-app-purpose input[type="text"]')).to.have.length(1);
    });

    it('should call props.updateAppName with the input value when clicking on the update app name button', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<EditForm updateAppName={spy} />);
        const instance = wrapper.instance();
        instance.appName = {
            value: 'new app name',
        };
        const button = wrapper.find('div.update-app-name button');
        button.props().onClick();
        expect(spy.calledOnce).to.be.true;
        expect(spy.getCall(0).args).to.eql(['new app name']);
    });

    it('should call props.updatePurpose with the input value when clicking on the update app purpose button', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<EditForm updatePurpose={spy} />);
        const instance = wrapper.instance();
        instance.purpose = {
            value: 'new app purpose',
        };
        const button = wrapper.find('div.update-app-purpose button');
        button.props().onClick();
        expect(spy.calledOnce).to.be.true;
        expect(spy.getCall(0).args).to.eql(['new app purpose']);
    });

    describe('mapDispatchToProps', () => {
        it('should set a prop for updating the app name', () => {
            expect(mapDispatchToProps.updateAppName).to.be.a('function');
        });

        it('should set purpose from the purpose state value', () => {
            expect(mapDispatchToProps.updatePurpose).to.be.a('function');
        });
    });
});
