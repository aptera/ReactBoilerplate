import React, {Component} from 'react';
import Counter from '../../components/Counter/Counter';

const divStyles = {
    textAlign: 'center'
};

class Counter_Page extends Component {
    render() {
        return (
            <div style={divStyles}>
                <Counter />
            </div>
        );
    }
}

export default Counter_Page;