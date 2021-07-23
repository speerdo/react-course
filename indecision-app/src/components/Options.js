import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <ol>
        {props.options.map((opt) => {
          return (
            <Option
              key={opt}
              optionText={opt}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ol>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
};

export default Options;
