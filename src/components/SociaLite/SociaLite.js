import React, { Component } from 'react';
import './socialite.scss';
import SociaLiteItem from './SociaLiteItem';
import FaceBookSociaLiteItem from './Services/FaceBookSociaLiteItem';
import GooglePlusSociaLiteItem from './Services/GooglePlusSociaLiteItem';

class SociaLite extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="rrssb-buttons rrssb-1">
                {(this.props.data).map((item, index) => {
                    switch (item.type){
                        case 'facebook':
                            return <FaceBookSociaLiteItem key={index} url={item.url} size={this.props.size} />;
                        case 'google-plus':
                            return <GooglePlusSociaLiteItem key={index} url={item.url} size={this.props.size} />;
                        default:
                            return <SociaLiteItem key={index} title={item.title} iconName={item.iconName} url={item.url} size='2x' color={item.color} subject='check out this cool thing' summary='this cool thing has a summary and its right here and yep okay cool' link='https://github.com/dfederspiel/ReactBoilerplate' />;
                    }
                }
                )}
            </ul>
        );
    }
}

export default SociaLite;

