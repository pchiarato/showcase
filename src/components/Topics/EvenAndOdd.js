import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({userInput:val});
    }

    splitNumbers(userInput){
        let evens=[];
        let odds=[];

        userInput.split(',').forEach(num => +num % 2 === 0 ? evens.push(num): odds.push(num));

        this.setState({evenArray:evens, oddArray:odds});
        
    }

    

    render() {
        return(
             <div className="puzzleBox evenAndOddPB">
    <h4> Evens and Odds </h4>
    <input className="inputLine" onChange={(e) => this.handleChange(e.target.value) }></input>
    <button className="confirmationButton" onClick={ () => {this.splitNumbers(this.state.userInput)}}> Split </button>
    <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
    <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
  </div>
        )
    }
}

export default EvenAndOdd;