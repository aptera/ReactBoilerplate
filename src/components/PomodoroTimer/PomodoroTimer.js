// @flow
import React, { Component } from 'react';
import './pomodoroTimer.scss';
var secToMin = require('sec-to-min');
/**
 * A pomodoro timer
 */
class PomodoroTimer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            defaultTime: this.props.defaultTime,
            defaultBreakTime: this.props.breakTime,
            currentTime: this.props.defaultTime,
            isPaused: false
        };

        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleBreakClick = this.handleBreakClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);

        this.intervalId = 0;
    }

    // https://facebook.github.io/react/docs/react-component.html#componentdidmount
    componentDidMount() {
        this.intervalId = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handleResetClick(){
        this.setState({
            currentTime: this.state.defaultTime
        });
    }

    handleBreakClick(){
        this.setState({
            currentTime: this.state.defaultBreakTime
        });
    }

    handlePauseClick(){
        if(this.state.isPaused){
            this.setState({
                isPaused: false
            });
            this.intervalId = setInterval(this.tick.bind(this), 1000);
        } else {
            this.setState({
                isPaused: true
            });
            clearInterval(this.intervalId);
        }
    }

    getPauseText(isPaused){
        if(isPaused) {
            return 'Start';
        }
        else {
            return 'Pause';
        }
    }

    tick() {

        if(this.state.isPaused)
            return;

        if(this.state.currentTime == 0){
            clearInterval(this.intervalId);
            return;
        }

        this.setState({
            currentTime: this.state.currentTime - 1
        });
    }

    render() {
        return (
            <div className="timer">
                <h2>{secToMin(this.state.currentTime)}</h2>
                <div className="controls">
                    <button onClick={this.handlePauseClick}>{
                        this.getPauseText(this.state.isPaused)
                    }
                    </button>
                    <button onClick={this.handleResetClick}>Reset</button>
                    <button onClick={this.handleBreakClick}>Break</button>
                </div>
            </div>
        );
    }
}

export default PomodoroTimer;