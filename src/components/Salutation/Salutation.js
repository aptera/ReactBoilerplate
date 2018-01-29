import React, {Component} from 'react';
import './salutation.scss';
import { setInterval } from 'timers';

class Salutation extends Component {

    constructor(props){
        super(props);
        
        this.intervalId = 0;
        this.wordsArray = props.words === undefined ? ['Salutations!'] : this.makeWordArray(props.words);
        this._isMounted = false;  // using a flag because: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
        let word = this.getRandomWord();
        this.state = {
            word: word
        };
    }

    componentDidMount() {
        this._isMounted = true;
        if (this.props.refreshInterval) {
            this.intervalId = setInterval(this.changeWord.bind(this), this.props.refreshInterval);
        }
    }

    changeWord() {
        if(!this._isMounted)
            return;
        let word = this.getRandomWord();
        this.setState({ word: word });
    }

    makeWordArray(wordsString) {
        return wordsString.split(',').map(function(item) {
            return item.trim();
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.intervalId);
    }

    getRandomWord(){
        return this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
    }

    render() {
        return (
            <div className={this.props.class}><a href={'https://www.merriam-webster.com/dictionary/' + this.state.word}>{this.state.word}</a></div>
        );
    }
}

export default Salutation;

