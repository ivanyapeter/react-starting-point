import React, { Component } from 'react';
import FilterableProductTable from './FilterableProductTable';
import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', id: 1},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', id: 2},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', id: 3},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', id: 4},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', id: 5},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', id: 6}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
