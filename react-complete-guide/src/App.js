import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userInput: ''
  }

  changeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  charOnClickHandler = (index) => {
    let chars = [...this.state.userInput];

    chars.splice(index, 1);

    let userInput = chars.join('');

    this.setState({
      userInput: userInput
    });
  }

  render() {
    let chars = this.state.userInput.slice().split('');

    let charComponents = (<div>
      {
        chars.map((char, index) => {
          return <CharComponent key={index} char={char} click={() => this.charOnClickHandler(index)} />
        })
      }
    </div>);


    return (
      <div className="App">
        <input onChange={(event) => this.changeHandler(event)} value={this.state.userInput}></input>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {charComponents}
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
