import React, {Component} from 'react';
import Avatar from '../../components/Avatar/Avatar';

const divStyle = {
    margin: '20px',
    display: 'flex'
};

class Avatar_Page extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Avatar user="dfederspiel" />
                <Avatar user="linzxe" />
                <Avatar user="aptera" />
                <Avatar user="github" />
            </div>
        );
    }
}

export default Avatar_Page;