'use strict';

import keyMirror from 'react/lib/keyMirror';

var ActionType = keyMirror({
    COUNTER_INCREMENT: null,
    COUNTER_SET: null,
    CONFIG_CHANGE: null
});

module.exports = ActionType;
