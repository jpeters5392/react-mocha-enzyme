import { expect } from 'chai';
import root, { updatePurpose, updateAppName } from '../root.js';
import * as Immutable from 'immutable';

describe('root module', () => {
    describe('reducer', () => {
        it('should update the appName in the state with the action appName for UPDATE_NAME actions', () => {
            const initialState = Immutable.fromJS({
                appName: 'mockAppName',
                purpose: 'mockPurpose',
            });
            const newState = root(initialState, {
                type: 'UPDATE_NAME',
                appName: 'new name',
            });

            expect(newState.toJS().appName).to.equal('new name');
        });

        it('should update the purpose in the state with the action purpose for UPDATE_PURPOSE actions', () => {
            const initialState = Immutable.fromJS({
                appName: 'mockAppName',
                purpose: 'mockPurpose',
            });
            const newState = root(initialState, {
                type: 'UPDATE_PURPOSE',
                purpose: 'new purpose',
            });

            expect(newState.toJS().purpose).to.equal('new purpose');
        });
    });

    describe('updatePurpose', () => {
        it('should have a type of UPDATE_PURPOSE', () => {
            const action = updatePurpose('new purpose');
            expect(action.type).to.equal('UPDATE_PURPOSE');
        });

        it('should have a value of the first argument', () => {
            const action = updatePurpose('new purpose');
            expect(action.purpose).to.equal('new purpose');
        });
    });

    describe('updateAppName', () => {
        it('should have a type of UPDATE_NAME', () => {
            const action = updateAppName('new name');
            expect(action.type).to.equal('UPDATE_NAME');
        });

        it('should have a value of the first argument', () => {
            const action = updateAppName('new name');
            expect(action.appName).to.equal('new name');
        });
    });
});