import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

// Class Component
export default class App extends Component {

  // term is the input text value
  // items are things in the list
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  // On user input, set the term state with the input text
  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  // On submit click
  // 1. Prevent default button click action
  // 2. Empty the term state ( input box )
  // 3. Push every text typed in the input text
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  // On Submit is at the form just as normal javascript form with button as post-back action
  // Input value attribute attached to the state.term
  // Put action of onChange to the input text
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
