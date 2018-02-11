import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../socialite.scss';
import SociaLiteItem from '../SociaLiteItem';

class EmailSociaLiteItem extends SociaLiteItem {

    constructor(props){
        super(props);
        this.color = '#FCEA7E';
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    getLink(props){

        if(!props.to)
            return;
        
        let link = 'mailto:';
        link += props.to + '?';

        let segments = [];
        if(props.subject) segments.push('subject=' + props.subject);
        if(props.subject) segments.push('body=' + props.body);
        if(props.subject) segments.push('cc=' + props.cc);
        if(props.subject) segments.push('bcc=' + props.bcc);
        
        return link += segments.join('&');
    }

    render() {
        return (
            <li className="email">
                <a href={this.getLink(this.props)}>
                    <FontAwesome name="envelope" size={this.props.size}/>
                    <span>Email</span>
                </a>
            </li>
        );
    }
}

export default EmailSociaLiteItem;