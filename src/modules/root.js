import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect'
import * as Immutable from 'immutable';

const initialState = {
    appName: 'Test Application',
    purpose: 'Unit testing',
};
const wrappedState = Immutable.fromJS(initialState);

const appNameFilter = (state) => state.get('appName');
const purposeFilter = (state) => state.get('purpose');

export const appInfoSelector = createSelector(
    appNameFilter,
    purposeFilter,
    (appName, purpose) => { return { appName, purpose }; }
);

const root = (state = wrappedState, action) => {
    switch (action.type) {
        case 'UPDATE_NAME': {
            return state.set('appName', action.appName);
        }
        case 'UPDATE_PURPOSE': {
            return state.set('purpose', action.purpose);
        }
        default: {
            return state;
        }
    }
};

export function updatePurpose(newPurpose) {
    return {
        type: 'UPDATE_PURPOSE',
        purpose: newPurpose,
    };
}

export function updateAppName(newName) {
    return {
        type: 'UPDATE_NAME',
        appName: newName,
    };
}

export default root;