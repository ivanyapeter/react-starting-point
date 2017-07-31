import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Function Component
// Inline styling
// Card props value is coming from CardList
const Card = (props) => {
  console.log('card created');
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}} >
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}} >
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

// Function Component
// Run map function on props.cards
// Returned card details
const CardList = (props) => {
  console.log('receive cards state from App component, iterate');
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

// Class component
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  // handleSubmit function to call api (github)
  // receive response, turn into JSON
  // call onSubmit function
  // empty input text value
  handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://api.github.com/users/${this.state.userName}`;
    console.log('submit username')
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('receive username data');
        this.props.onSubmit(data);
        this.setState({ userName: '' });
      })
      .catch(e => console.log('error', e));
  }

  // set userName on every change in input text
  onChange = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text"
          value={this.state.userName}
          onChange={this.onChange}
          placeholder="Github username" required/>
        <button>Add Card</button>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  };

  // Adding new card details to cards array
  addNewCard = (cardInfo) => {
    console.log('add new card to array cards');
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  };
}

export default App;
