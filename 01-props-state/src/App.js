import React, { Component } from 'react';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Initial setup, set state of isOn to true
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }

  // Create function named toggle
  // Change the state isOn to the opposite of the current isOn value
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }

  // onClick, call toggle function
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <MyComponent name="Ivan"/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>
          {this.state.isOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default App;
