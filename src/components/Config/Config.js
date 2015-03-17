'use strict';

import React from 'react';
import AppActions from '../../actions/AppActions'
import ConfigStore from '../../stores/ConfigStore'


function getStateFromStore() {
    console.log('getting state', ConfigStore.getCurrentConfig('pushNotificationsEnabled'));
    return {
        pushNotificationsEnabled: ConfigStore.getCurrentConfig('pushNotificationsEnabled')
    }
}


var Config = React.createClass({

    getInitialState() {
        return {
            pushNotificationsEnabled: false
        }
    },

    componentDidMount() {
        ConfigStore.addChangeListener(this.onChange);
    },

    componentWillUnmount() {
        ConfigStore.removeChangeListener(this.onChange);
    },

    handleMyClick() {
        AppActions.setPushNotificationEnabled(!this.state.pushNotificationsEnabled);
    },

    render() {
        console.log('render state', this.state);

        return (
            <div onClick={this.handleMyClick}>
                <p>whatever: {this.state.pushNotificationsEnabled + ''}</p>
            </div>
        )
    },

    onChange() {
        console.log('on change');
        this.setState(getStateFromStore())
    }
});

module.exports = Config;
