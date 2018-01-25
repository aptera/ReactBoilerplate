
import React, {Component} from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

class App extends Component {
    
    // https://facebook.github.io/react/docs/react-component.html#render
    render() {
        return (
            <div className='app'>
               
                <ProgressBar maxValue={1000} value={500} color="hotpink" color2="purple" rotation="5" />
                <ProgressBar maxValue={234} value={234} color="blue" color2="hotpink" rotation="10"  />
                <ProgressBar maxValue={2346} value={1234} color="green" color2="yellow" rotation="15"  />
                <ProgressBar maxValue={100} value={26.5} color="yellow" color2="green" rotation="20"  />
                <ProgressBar maxValue={345} value={21} color="purple" color2="purple" rotation="25"  />
                <ProgressBar maxValue={123} value={12} color="silver" color2="gold" rotation="30"  />
                <ProgressBar maxValue={1000} value={500} color="hotpink" color2="blue" rotation="35"  />
                <ProgressBar maxValue={234} value={45} color="blue" color2="purple" rotation="40"  />
                <ProgressBar maxValue={2346} value={1234} color="green" color2="yellow" rotation="45"  />
                <ProgressBar maxValue={100} value={26.5} color="yellow" color2="purple" rotation="50"  />
                <ProgressBar maxValue={345} value={21} color="purple" color2="purple" rotation="55"  />
                <ProgressBar maxValue={123} value={12} color="silver" color2="purple" rotation="0"  />
                  
            </div>
        );
    }
}
    
export default App;