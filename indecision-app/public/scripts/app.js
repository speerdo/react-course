'use strict';

var appData = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

function getSubtitle(sub) {
  if (!sub) return;
  return React.createElement(
    'p',
    null,
    appData.subtitle
  );
}

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    appData.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var onRemoveAll = function onRemoveAll() {
  appData.options = [];
  renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * appData.options.length);
  var option = appData.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
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
      'button',
      { onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      appData.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
