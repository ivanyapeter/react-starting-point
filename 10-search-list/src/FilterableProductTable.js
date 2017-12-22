import React, { Component } from 'react';
import ProductTable from './ProductTable';
import './App.css';

class FilterableProductTable extends Component {
  render() {
    return (
      <ProductTable products={this.props.products}/>
    );
  }
}

export default FilterableProductTable;
