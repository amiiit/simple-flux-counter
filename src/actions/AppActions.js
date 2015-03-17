'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionType from './ActionType'

class AppActions {
    static increment() {
        Dispatcher.handleViewAction({
            actionType: ActionType.COUNTER_INCREMENT
        })
    }

    static setPushNotificationEnabled(stateToSet) {
        Dispatcher.handleViewAction({
            actionType: ActionType.CONFIG_CHANGE,
            config: {
                pushNotificationsEnabled: stateToSet
            }
        })
    }
}

export default AppActions;