import React from 'react';
import './App.css';

const ProductTable = (props) => {
  
  return (
    <table>
      <tbody>
      {
        props.products.map((product) => {
          return(
            <tr key={product.id}>
              <td>{product.name}</td>
              <td></td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );
}

export default ProductTable;
