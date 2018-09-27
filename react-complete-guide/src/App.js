import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    username: "username"
  }

  userInputHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.userInputHandler} value={this.state.username} />
        <UserOutput output={this.state.username} />
        <UserOutput output={this.state.username} />
        <UserOutput output={this.state.username} />
      </div>
    );
  }
}

export default App;
