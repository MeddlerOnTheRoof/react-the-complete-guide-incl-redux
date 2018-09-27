import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // only class based components contain state
  // try to stay stateless wherever possible
  // state is a non-optional name
  // it helps the react component know when to re-render,
  // based on changes to this property
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  // onclick becomes onClick, Handler suffix good
  // to indicate it is not actively called
  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Maximillian';

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  // using paranthesis in jsx calls the funcion immediately in the DOM

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    // inline, so 'scoped' but not great...
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px stolid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    // always upper case your component name 
    // as lowercase is reserved for vanilla html
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
