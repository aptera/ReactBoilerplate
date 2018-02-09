import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './socialite.scss';

class SociaLiteItem extends Component {

    componentWillReceiveProps(props) {
        this.props = props;
    }
    getLink(url){
        url=url.replace('{SUBJECT}', this.props.subject);
        url=url.replace('{SUMMARY}', this.props.summary);
        url=url.replace('{LINK}', this.props.link);

        return url;
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

