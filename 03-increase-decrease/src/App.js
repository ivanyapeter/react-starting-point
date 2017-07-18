import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Initial setup of
  // Number of clicks state 0
  // Show the number
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  // Create function named IncrementItem
  // getting state.click value and add 1
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  // Create function named DecreaseItem
  // getting state.click value and decrease 1
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  // Create function named ToggleClick
  // change the show value to the opposite of current state.show value
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  // If state.show true, button text 'Hide number' else 'Show number'
  render() {
    return (
      <div className="App">
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
