import React from 'react';
import Purpose from './Purpose.jsx';
import AppName from './AppName.jsx';
import { connect } from 'react-redux';
import { updateAppName, updatePurpose } from '../modules/root';

export class EditForm extends React.Component {
    constructor(props) {
        super(props);
    }

    updateAppName() {
        this.props.updateAppName(this.appName.value);
    }

    updatePurpose() {
        this.props.updatePurpose(this.purpose.value);
    }

    render() {
        return (
            <div>
                <div className="update-app-name">
                    <input type="text" name="newAppName" ref={(input) => { this.appName = input; }} />
                    <button type="button" onClick={() => { this.updateAppName(); }}>
                        Update App Name
                    </button>
                </div>
                <div className="update-app-purpose">
                    <input type="text" name="newPurpose" ref={(input) => { this.purpose = input; }} />
                    <button type="button" onClick={() => { this.updatePurpose(); }}>
                        Update Purpose
                    </button>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = () => {
    return {};
};

export const mapDispatchToProps = {
    updateAppName,
    updatePurpose,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
