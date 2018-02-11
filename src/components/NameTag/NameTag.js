import React, {Component} from 'react';
import './nametag.scss';
import rickjames from './rickjames.jpg';

class NameTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <div className={this.props.myClasses}>
                I'm {this.state.name}, bitch
                <img src={rickjames} />
            </div>
        );
    }
}

export default NameTag;