'use strict';

import React from 'react';
import Counter from '../Counter';
import Config from '../Config';

var Application = React.createClass({

        render() {
            return (
                <div>
                    <p>Hello React Counter</p>
                    <Config></Config>
                    <Counter></Counter>
                </div>
            )
        }
    }
);

module.exports = Application;
