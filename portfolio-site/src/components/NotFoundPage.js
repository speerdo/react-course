import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404! This page not found. <Link to='/'>Go Home</Link>
  </div>
);

export default NotFoundPage;
