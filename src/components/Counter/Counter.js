'use strict';

import React from 'react';
import AppActions from '../../actions/AppActions'
import CounterStore from '../../stores/CounterStore'


function getStateFromStore() {
    return {
        count: CounterStore.getCurrentCount()
    }
}

var Counter = React.createClass({

    getInitialState: () => {
        return {
            count: 0
        }
    },

    componentDidMount: function () {
        CounterStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CounterStore.removeChangeListener(this._onChange);
    },

    handleClick: () => {
        AppActions.increment();
    },


    render() {
        return (
            <button onClick={this.handleClick}>{this.state.count}</button>
        )
    },

    _onChange() {
        this.setState(getStateFromStore())
    }
});

module.exports = Counter;
