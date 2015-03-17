/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import '6to5/polyfill';

import React from 'react';
import App from './components/App';
import Counter from './components/Counter';
import CounterStore from './stores/CounterStore'
import ConfigStore from './stores/ConfigStore'

var path = decodeURI(window.location.pathname);

function run() {
    var component = React.createElement(App, {});
    CounterStore.initialize();
    ConfigStore.initialize();
    React.render(component, document.body);
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
    new Promise((resolve) => {
        if (window.addEventListener) {
            window.addEventListener('DOMContentLoaded', resolve);
        } else {
            window.attachEvent('onload', resolve);
        }
    })
]).then(run);

