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
      <li>Item One</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  console.log(count);
};

const subtractOne = () => {
  count--;
  console.log(count);
};

const reset = () => {
  count = 0;
  console.log(count);
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subtractOne}>-1</button>
    <button onClick={reset}>RESET</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
