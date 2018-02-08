// @flow
import React, { Component } from 'react';
import './avatar.scss';

type AvatarProps = {
    user: string,
    alt?: string,
    size?: number
}

class Avatar extends Component<AvatarProps> {

    constructor(props: AvatarProps){
        super(props);
        
        // this.alt    = props.alt;
        // this.user   = props.user;
        // this.size   = props.size;
    }

    componentWillReceiveProps(props: AvatarProps){
        this.props = props;
        // this.alt    = props.alt;
        // this.user   = props.user;
        // this.size   = props.size;
    }

    render() {
        return (
            <div className="avatar">
                <span className="user-name">{this.props.user}</span>
                <a href={'https://github.com/' + this.props.user}>
                    <img
                        src={this.getPhotoUrl()}
                        alt={this.props.alt}
                        style={{width: this.props.size + 'px', height: this.props.size + 'px'}}
                        className="commentPhoto widget" /><br />
                </a>
            </div>
        );
    }

    getPhotoUrl() {
        return 'https://avatars.githubusercontent.com/' + this.props.user + '?s=' + this.props.size;
    }
}

export default Avatar;