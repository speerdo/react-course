let clicked = false;

const onShowHide = () => {
  clicked = !clicked;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowHide}>
        {clicked ? `Hide Details` : `Show Details`}
      </button>
      {clicked && (
        <div>
          <p>Hey, Theese are some details that are now visible.</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
