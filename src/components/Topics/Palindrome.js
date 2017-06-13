import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state ={
            userInput: '',
            palindrome: ''
        };
    }
    handleChange(val){
        this.setState({userInput:val});
    }

    isPalindrome(userInput){
        let forwards = userInput.toLowerCase().split(' ').join('');
        let backwards = userInput.toLowerCase().split(' ').join('').split('').reverse().join('');
        if (forwards === backwards){
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
        
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome