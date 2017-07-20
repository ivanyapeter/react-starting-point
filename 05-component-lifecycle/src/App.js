import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {

  // Initial Setup
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: ++this.state.counter
    });
  };

  render() {
    return (
      <div className="App">
        <Counter counter={this.state.counter} />
        <button onClick={this.incrementCounter}>Click1</button>
      </div>
    );
  }
}

export default App;
