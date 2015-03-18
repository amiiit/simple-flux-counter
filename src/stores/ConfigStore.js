'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionType from '../actions/ActionType'
import EventEmitter from 'events'
import assign from 'object-assign';


var counter = 0;
var CHANGE_EVENT = 'change';
var config = {
    pushNotificationsEnabled: false,
    pushNotificationsAllowed: false
};

var ConfigStore = assign({}, EventEmitter.prototype, {

    initialize() {
        var dispatcherToken = Dispatcher.register(function (payload) {
            var action = payload.action;

            if (action.actionType == ActionType.CONFIG_CHANGE) {
                console.log('got config change', action.config);
                assign(config, action.config);
                ConfigStore.emitChange();
            }
        });
    },

    getCurrentConfig(attr) {
        if (attr) {
            return config[attr]
        } else {
            return config;
        }
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


module.exports = ConfigStore;