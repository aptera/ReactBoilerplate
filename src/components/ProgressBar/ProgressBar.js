import React, {Component} from 'react';
import './progressBar.scss';

class ProgressBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            maxWidth: 0
        };
        this.targetPercentage = (this.props.value / this.props.maxValue);
    }

    progressBarStyle(){
        return { 
            backgroundImage: 'linear-gradient(' + this.props.rotation + 'deg, ' + this.props.color + ', ' + this.props.color2 + ')',
            maxWidth: this.state.maxWidth, 
            backgroundColor: this.props.color, 
            borderRadius: this.getRadius() 
        };
    }

    componentDidMount(){
        setTimeout(() => this.setState({maxWidth: (this.targetPercentage * 100) + '%'}), 10);
    }

    getRadius() {
        return '5px ' + ((this.targetPercentage * 100 >= 100) ? '5px 5px' : '0 0') + ' 5px';
    }

    render() {
        return (
            <div className="progress-bar-wrapper">
                <label>Progress &reg; Bar</label>
                <div className="progress-bar">
                    <div className="progress-bar-progress" style={this.progressBarStyle()}>
                        <div className="percentage">{Math.round(this.targetPercentage * 100)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;