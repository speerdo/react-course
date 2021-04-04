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
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Adam',
  age: 41,
  location: 'Indianapolis'
};

function getLocation(location) {
  if (!location) return;else return React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
