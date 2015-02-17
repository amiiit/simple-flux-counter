'use strict';

import React from 'react';
import Counter from '../Counter';

var Application = React.createClass({

        render() {
            return (
                <div>
                    <p>Hello React Counter</p>
                    <Counter></Counter>
                </div>
            )
        }
    }
);

module.exports = Application;
