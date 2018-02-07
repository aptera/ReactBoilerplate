import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './socialite.scss';

class SociaLiteItem extends Component {
    constructor(props){
        super(props);
        this.title = props.title;
        this.iconName = props.iconName;
        this.url = props.url;
        this.size = props.size;
    }

    componentWillReceiveProps(props) {
        this.title = props.title;
        this.iconName = props.iconName;
        this.url = props.url;
        this.size = props.size;
    }

    render() {
        return (
            <li>
                <a href={this.url}>
                    <FontAwesome name={this.iconName} size={this.size} style={{color:this.props.color}}/>
                    <span>{this.title}</span>
                </a>
            </li>
        );
    }
}

export default SociaLiteItem;

