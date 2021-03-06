import React from 'react';

// Function Component
const List = (props) => (
  <ul>
    {
      props.items.map( (item, index) => <li key={index}>{item}</li> )
    }
  </ul>
);

export default List;
