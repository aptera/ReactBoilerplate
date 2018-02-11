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
                <Avatar user="dfederspiel" size={150} />
                <Avatar user="linzxe" size={150} />
                <Avatar user="nbalcolm" size={150} />
                <Avatar user="benbakle" size={150} />
                <Avatar user="RobertMcCoy" size={150} />
                <Avatar user="zeek55555" size={150} />
            </div>
        );
    }
}

export default Avatar_Page;