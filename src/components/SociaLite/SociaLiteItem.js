import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './socialite.scss';

class SociaLiteItem extends Component {

    componentWillReceiveProps(props) {
        this.props = props;
        this.openWindow = this.openWindow.bind(this);
    }
    getLink(url){
        url=url.replace('{URL}', url);
        return url;
    }

    openWindow(e){
        window.open('google.com', 'Facebook', 'tolbar=0,status=0,resizable=yes,width=300,height=450');
        e.preventDefault();
    }

    render() {
        return (
            <li>
                <a href={this.getLink(this.props.url)}>
                    <FontAwesome name={this.props.iconName} size={this.props.size}/>
                    <span>{this.props.title}</span>
                </a>
            </li>
        );
    }
}

export default SociaLiteItem;

