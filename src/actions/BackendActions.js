'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionType from './ActionType'

export default class BackendActions {
    static setPushNotificationEnabled() {
        Dispatcher.handleBackendAction({
            actionType: ActionType.CONFIG_CHANGE
        })
    }
}