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
    ],
    toggleView: true
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

  showList = () => {
    const doesShow = this.state.toggleView;
    this.setState({toggleView: !doesShow});
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons; 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChange = (event, id) => {

    const person = {
      ...this.state.persons[id]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[id] = person;
    this.setState({persons: persons});

  }

  render() {

    let persons = null;

    if ( this.state.toggleView ) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                click = {() => this.deletePerson(index)}
                name = {person.name}
                key = {index} //real base have params "person.id"
                changed = {(event) => this.nameChange(event, index)}
              />
            })
          }
        </div>
        // test each
        // <Person 
        //   name={this.state.persons[0].name} 
        //   click={this.switchName.bind(this, 'Max3')}/>
        // <Person 
        //   name={this.state.persons[1].name}
        //   changed={this.changeName}>
        //   Default text</Person>
        // <Person name={this.state.persons[2].name}/>
      );
    }

    return (
      <div className="App">
        <h1>hi</h1>
        <button onClick={this.showList}>Show list</button>
        <button onClick={this.switchName.bind(this, 'Max3')}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
