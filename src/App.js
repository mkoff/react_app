import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max'},
      {name: 'Alex'},
      {name: 'Jonh'}
    ]
  }

  switchName = (newName) => {
    this.setState({
      persons: [
        {name: newName},
        {name: 'Alex2'},
        {name: 'Jonh2'}
      ]
    });
  }

  changeName = (event) => {
    this.setState({
      persons: [
        {name: 'Max'},
        {name: event.target.value},
        {name: 'Jonh2'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <Person name={this.state.persons[0].name} click={this.switchName.bind(this, 'Max3')}/>
        <Person 
          name={this.state.persons[1].name}
          changed={this.changeName}>
          Default text</Person>
        <Person name={this.state.persons[2].name}/>
        <button onClick={this.switchName.bind(this, 'Max3')}>Switch name</button>
      </div>
    );
  }
}

export default App;
