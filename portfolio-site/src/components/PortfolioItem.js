import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h1>Portfolio Item</h1>
    <p>Testing text for Item with ID of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
