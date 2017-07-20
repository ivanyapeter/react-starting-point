import React, { Component } from 'react';

class Counter extends Component {

  // Initial State
  constructor(props) {
    super(props);
    console.log('constructor', 'props: ', props);
  }

  componentWillMount() {
    console.log('componentWillMount fired');
  }

  componentDidMount() {
    console.log('componentDidMount fired');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps fired, nextProps:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate fired');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      'componentWillUpdate fired, nextProps:',
      nextProps,
      " nextState:",
      nextState
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate, prevProps:',
      prevProps,
      ' prevState:',
      prevState
    );
  }

  render() {
    console.log('render fired');
    return (
      <div>
        Counter value: {this.props.counter}
      </div>
    );
  }
}

export default Counter;
