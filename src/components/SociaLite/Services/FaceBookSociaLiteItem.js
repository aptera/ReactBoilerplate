import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../socialite.scss';
import SociaLiteItem from '../SociaLiteItem';

class FaceBookSociaLiteItem extends SociaLiteItem {

    constructor(props){
        super(props);
        this.url = 'https://www.facebook.com/sharer/sharer.php?u={URL}';
        this.openWindow = this.openWindow.bind(this);
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    openWindow(e){
        window.open(this.getLink(), 'Facebook', 'toolbar=0,status=0,resizable=yes,width=300,height=450');
        e.preventDefault();
    }

    getLink(){
        return this.url.replace('{URL}', (this.props.url) ? this.props.url : window.location.href);
    }

    render() {
        return (
            <li className="facebook">
                <a href={this.getLink()} onClick={this.openWindow}>
                    <FontAwesome name="facebook" size={this.props.size}/>
                    <span>Facebook</span>
                </a>
            </li>
        );
    }
}

export default FaceBookSociaLiteItem;