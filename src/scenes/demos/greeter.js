import React, {Component} from 'react';
import Greeter from '../../components/Greeter/Greeter';

const divStyles = {
    textAlign: 'center'
};

class Greeter_Page extends Component {
    render() {
        return (
            <div style={divStyles}>
                <Greeter />
            </div>
        );
    }
}

export default Greeter_Page;