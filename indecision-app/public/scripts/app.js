'use strict';

console.log('app.js is running');

// JSX syntax JavaScript XML

var appData = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

function getSubtitle(sub) {
  if (!sub) return;else return React.createElement(
    'p',
    null,
    appData.subtitle
  );
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appData.title
  ),
  getSubtitle(appData.subtitle),
  React.createElement(
    'p',
    null,
    appData.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  console.log(count);
};

var subtractOne = function subtractOne() {
  count--;
  console.log(count);
};

var reset = function reset() {
  count = 0;
  console.log(count);
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: subtractOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'RESET'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
