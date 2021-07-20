class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      clicked: false,
    };
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        clicked: !prevState.clicked,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.clicked ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.clicked && (
          <div>
            <p>Hey, Theese are some details that are now visible.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));
