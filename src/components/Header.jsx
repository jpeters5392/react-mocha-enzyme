import React from 'react';
import Purpose from './Purpose.jsx';
import AppName from './AppName.jsx';
import { connect } from 'react-redux';
import { appInfoSelector } from '../modules/root';

export const Header = (props) => {
    return (
        <header>
            <AppName appName={props.appName} />
            <Purpose purpose={props.purpose} />
        </header>
    );
};

export const mapStateToProps = (state) => {
    return appInfoSelector(state);
};

export default connect(mapStateToProps)(Header);
