import React, {Component} from 'react';
import PomodoroTimer from '../../components/PomodoroTimer/PomodoroTimer';

const divStyles = {
    textAlign: 'center'
};

class PomodoroTimer_Page extends Component {
    render() {
        return (
            <div style={divStyles}>
                <PomodoroTimer defaultTime="1800" breakTime="300" />
                <PomodoroTimer defaultTime="60" breakTime="60" />
                <PomodoroTimer defaultTime="1800" breakTime="300" />
                <PomodoroTimer defaultTime="1800" breakTime="300" />
                <PomodoroTimer defaultTime="60" breakTime="60" />
                <PomodoroTimer defaultTime="3600" breakTime="180" />
            </div>
        );
    }
}

export default PomodoroTimer_Page;