'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionType from './ActionType'

export default class BackendActions {
    static setPushNotificationEnabled(valueToSet) {
        Dispatcher.handleBackendAction({
            actionType: ActionType.CONFIG_CHANGE,
            config: {
                pushNotificationsEnabled: valueToSet
            }
        })
    }

    static setPushNotificationAllowed(valueToSet) {
        Dispatcher.handleBackendAction({
            actionType: ActionType.CONFIG_CHANGE,
            config: {
                pushNotificationsAllowed: valueToSet
            }
        })
    }

}