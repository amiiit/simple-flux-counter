'use strict';

import React from 'react';
import AppActions from '../../actions/AppActions'
import CounterStore from '../../stores/CounterStore'
import {RaisedButton} from 'material-ui';


function getStateFromStore() {
    return {
        count: CounterStore.getCurrentCount() + ""
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
            <RaisedButton onClick={this.handleClick} label={"Count: "+ this.state.count}></RaisedButton>
        )
    },

    _onChange() {
        this.setState(getStateFromStore())
    }
});

module.exports = Counter;
