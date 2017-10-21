import Fiber, { Component, render } from 'Fiber';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });

    console.log(this.state);
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });

    console.log(this.state);
  }

  render() {
    return (
      <div id="app">
        <p>Count: {this.state.count}</p>
        <Button onClick={this.increment.bind(this)} value="Increment" />
        <Button onClick={this.decrement.bind(this)} value="Decrement" />
      </div>
    );
  }
}

const Button = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
}

render(<App />, document.getElementById('root'));
