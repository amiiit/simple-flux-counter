'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionType from '../actions/ActionType'
import EventEmitter from 'events'
import assign from 'object-assign';


var counter = 0;
var CHANGE_EVENT = 'change';

var CounterStore = assign({}, EventEmitter.prototype, {

    initialize() {
        var dispatcherToken = Dispatcher.register(function (payload) {
            var action = payload.action;

            if (action.actionType == ActionType.COUNTER_INCREMENT) {
                counter++;
                CounterStore.emitChange();
            } else if (action.actionType == ActionType.COUNTER_SET) {
                counter = action.value;
                CounterStore.emitChange();
            }
        });
    },

    getCurrentCount() {
        return counter;
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


module.exports = CounterStore;