'use strict';

import React from 'react';
import AppActions from '../../actions/AppActions'
import ConfigStore from '../../stores/ConfigStore'


function getStateFromStore() {
    return {
        pushNotificationsEnabled: ConfigStore.getCurrentConfig('pushNotificationsEnabled'),
        pushNotificationsAllowed: ConfigStore.getCurrentConfig('pushNotificationsAllowed')
    }
}


var Config = React.createClass({

    getInitialState() {
        return {
            pushNotificationsEnabled: false,
            pushNotificationsAllowed: false
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
        return (
            <div onClick={this.handleMyClick}>
                <p>Push notifications allowed: {this.state.pushNotificationsAllowed + ''}</p>
                <p>Push notifications enabled: {this.state.pushNotificationsEnabled + ''}</p>
            </div>
        )
    },

    onChange() {
        this.setState(getStateFromStore())
    }
});

module.exports = Config;
