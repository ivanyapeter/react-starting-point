import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // term is the input text value
  // img store url which later will be passed to HTML image element source
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }

  // Create onChange function
  // Change state depending on the current input value
  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  // Create handleSubmit function
  // 1. Prevent default button click action
  // 2. Set api_key and giphy url as constant with search query from state.term
  // 3. Fetch data from giphy API
  // 4. Using promises to retrieve data and continue working on the data
  // 5. Reset term to empty string
  // 6. Set state.img from data retrived from giphy following JSON file path to get URL
  // 7. Catch error
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term:'',
        img: data.data[0].images.fixed_height.url
      }))
      .catch(e => console.log('error', e));
  }

  // Pass URL from state.img to HTML image source element
  // Set HTML image alt element with state.term text
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <img src={this.state.img} height="200" alt={this.state.term}/>
      </div>
    );
  }
}

export default App;
