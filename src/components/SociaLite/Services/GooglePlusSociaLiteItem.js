import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../socialite.scss';
import SociaLiteItem from '../SociaLiteItem';

class GooglePlusSociaLiteItem extends SociaLiteItem {

    constructor(props){
        super(props);
        this.url = 'https://plus.google.com/share?url={URL}';
        this.color = '#e93f2e';
        this.openWindow = this.openWindow.bind(this);
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    openWindow(e){
        window.open(this.getLink(), 'Google Plus', 'toolbar=0,status=0,resizable=yes,width=300,height=450');
        e.preventDefault();
    }

    getLink(){
        return this.url.replace('{URL}', (this.props.url) ? this.props.url : window.location.href);
    }

    render() {
        return (
            <li>
                <a href={this.getLink()} onClick={this.openWindow}>
                    <FontAwesome style={{color: this.color}} name="google-plus" size={this.props.size}/>
                    <span>Google Plus</span>
                </a>
            </li>
        );
    }
}

export default GooglePlusSociaLiteItem;