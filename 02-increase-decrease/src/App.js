import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} >
        {this.props.label}
      </button>
    )
  }
}

const Result = (props) => {
  return (
    <div>
       <h2>{ props.counter }</h2> 
    </div>
  );
};

class App extends Component {

  // Initial setup of
  // Number of counter state 0
  // Show the number
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // Create function named IncrementCounter
  // getting state.click value and add 1
  IncrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  // Create function named DecreaseCounter
  // getting state.click value and decrease 1
  DecreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  // If state.show true, button text 'Hide number' else 'Show number'
  render() {
    return (
      <div className="App">

         {/* <button onClick={this.ToggleClick}>
           { this.state.show ? 'Hide number' : 'Show number' } THIS
        </button>   */}
         
        <Button onClick={this.IncrementCounter} label='+1' />
        <Button onClick={this.DecreaseCounter} label='-1' />
        <Result counter={this.state.counter} /> 
      </div>
    );
  }
}

export default App;
