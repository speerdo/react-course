import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <h1>This is my portfolio with several items</h1>
    <div>
      <p>My Recent Items</p>
      <Link to='/portfolio/1'>Item 1</Link>
      <Link to='/portfolio/2'>item 2</Link>
    </div>
  </div>
);

export default Portfolio;
