import React, {Component} from 'react';
import NameTag from '../../components/NameTag/NameTag';

const divStyles = {
    textAlign: 'center'
};

class NameTag_Page extends Component {
    render() {
        return (
            <div style={divStyles}>
                <NameTag myClasses="big yellow" name="Rick James" />
            </div>
        );
    }
}

export default NameTag_Page;