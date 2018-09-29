import React, { Component } from 'react';
import './App.css';
// style root is a named export, needed for wrapping certain styling in Radium
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  // only class based components contain state
  // try to stay stateless wherever possible
  // state is a non-optional name
  // it helps the react component know when to re-render,
  // based on changes to this property
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = (event) => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px stolid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'green',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    let toggleButton = 'Show Persons';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
      toggleButton = 'Hide Persons';
    }

    const classes = [];

    if (this.state.persons.length <= 2)
      classes.push('red');

    if (this.state.persons.length <= 1)
      classes.push('bold');

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>{toggleButton}</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
