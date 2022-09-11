// export a stateless functional component
// render description, amount, createdAt
import React from 'react';

const ExpenseListItem = ({ descrpition, amount, createdAt }) => {
  return (
    <div>
      <h3>{descrpition}</h3>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
