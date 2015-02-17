'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionType from './ActionType'

class AppActions {
    static increment() {
        Dispatcher.handleViewAction({
            actionType: ActionType.COUNTER_INCREMENT
        })
    }
}

export default AppActions;