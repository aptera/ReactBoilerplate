import React, {Component} from 'react';
import './avatar.scss';

class Avatar extends Component {
    constructor(props){
        super(props);

        this.id     = props.id;
        this.alt    = props.alt;
        this.user   = props.user;
        this.size   = props.size;

        this.state = {
            id:     props.id,
            alt:    props.alt,
            user:   props.user,
            size:   props.size
        };
    }

    render() {
        return (
            <div className="avatar">
                <span className="user-name">{this.props.user}</span>
                <a href={'https://github.com/' + this.state.user}>
                    <img
                        src={this.getPhotoUrl()}
                        alt={this.state.alt}
                        width={this.state.size}
                        height={this.state.size}
                        className="commentPhoto widget" /><br />
                </a>
            </div>
        );
    }

    getPhotoUrl() {
        return 'https://avatars.githubusercontent.com/' + this.props.user + '?s=' + this.state.size;
    }
}

export default Avatar;