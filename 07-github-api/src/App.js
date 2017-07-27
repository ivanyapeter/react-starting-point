import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
  return (
    <div>
      <img width="75" src="{props.avatar_url}" alt=""/>
      <div style={{display: 'inline-block', marginLeft: 10}} >
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}} >
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://api.github.com/users/${this.state.userName}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        console.log(data)
      )
      .catch(e => console.log('error', e));
  }

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

      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Paul O'Shannessy",
          avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
          company: "Facebook" },
        {
          name: "Paul O'Shannessy",
          avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
          company: "Facebook" },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
