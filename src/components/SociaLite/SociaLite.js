import React, { Component } from 'react';
import './socialite.scss';
import SociaLiteItem from './SociaLiteItem';
import FaceBookSociaLiteItem from './Services/FaceBookSociaLiteItem';
import GooglePlusSociaLiteItem from './Services/GooglePlusSociaLiteItem';
import EmailSociaLiteItem from './Services/EmailSociaLiteItem';
class SociaLite extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="socialite-share">
                {(this.props.data).map((item, index) => {
                    switch (item.type){
                        case 'facebook':
                            return <FaceBookSociaLiteItem 
                                key={index}
                                url={item.url}
                                size={this.props.size} />;
                        case 'google-plus':
                            return <GooglePlusSociaLiteItem 
                                key={index}
                                url={item.url}
                                size={this.props.size} />;
                        case 'email':
                            return <EmailSociaLiteItem 
                                key={index}
                                to={item.to}
                                subject={item.subject}
                                body={item.body}
                                cc={item.cc}
                                bcc={item.bcc}
                                size={this.props.size} />;
                        default:
                            return <SociaLiteItem 
                                key={index}
                                title={item.title}
                                iconName={item.iconName}
                                url={item.url}
                                size={this.props.size}
                                color={item.color}
                                subject='check out this cool thing'
                                summary='this cool thing has a summary and its right here and yep okay cool'
                                link='https://github.com/dfederspiel/ReactBoilerplate' />;
                    }
                }
                )}
            </ul>
        );
    }
}

export default SociaLite;

