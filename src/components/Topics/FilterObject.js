import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super();
         this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    }
  }

  handleChange(val) {
    this.setState({
        userInput: val
    })
  }

  filterEmployees(query) {
    let {employees} = this.state
    let filteredEmployees = [];
       for (let prop in employees) {
           if (employees[prop].hasOwnProperty(query)){
               filteredEmployees.push(employees[prop]);
           }
       }
    this.setState({
        filteredEmployees
    })

  }

      render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees) } </span>
      </div>
    )
  }
}

export default FilterObject;