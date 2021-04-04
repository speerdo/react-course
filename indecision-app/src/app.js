console.log('app.js is running');

// JSX syntax JavaScript XML

const appData = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two'],
};

function getSubtitle(sub) {
  if (!sub) return;
  else return <p>{appData.subtitle}</p>;
}

const template = (
  <div>
    <h1>{appData.title}</h1>
    {getSubtitle(appData.subtitle)}
    <p>{appData.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Adam',
  age: 41,
  location: 'Indianapolis',
};

function getLocation(location) {
  if (!location) return;
  else return <p>Location: {location}</p>;
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
