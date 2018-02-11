import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../socialite.scss';
import SociaLiteItem from '../SociaLiteItem';

class GooglePlusSociaLiteItem extends SociaLiteItem {

    constructor(props){
        super(props);
        this.url = 'https://plus.google.com/share?url={URL}';
        this.openWindow = this.openWindow.bind(this);
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    openWindow(e){
        window.open(this.getLink(this.url), 'Google Plus', 'toolbar=0,status=0,resizable=yes,width=300,height=450');
        e.preventDefault();
    }

    render() {
        return (
            <li className="googleplus">
                <a href={this.getLink(this.url)} onClick={this.openWindow}>
                    <FontAwesome name="google-plus" size={this.props.size}/>
                    <span>Google Plus</span>
                </a>
            </li>
        );
    }
}

export default GooglePlusSociaLiteItem;