const appData = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

function getSubtitle(sub) {
  if (!sub) return;
  return <p>{appData.subtitle}</p>;
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    appData.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const onRemoveAll = () => {
  appData.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appData.options.length);
  const option = appData.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{appData.title}</h1>
      {getSubtitle(appData.subtitle)}
      <p>
        {appData.options.length > 0 ? 'Here are your options' : 'No options'}
      </p>
      <button disabled={appData.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {appData.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();
