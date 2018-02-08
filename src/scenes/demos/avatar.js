import React, {Component} from 'react';
import Avatar from '../../components/Avatar/Avatar';

const divStyle = {
    margin: '20px',
    display: 'flex',
    flexWrap: 'wrap'
};

class Avatar_Page extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Avatar alt="test" user="dfederspiel" size={250} />
                <Avatar user="linzxe" size={250} />
                <Avatar user="nbalcolm" size={250} />
                <Avatar alt="alternate text" user="github" size={250} />
            </div>
        );
    }
}

export default Avatar_Page;