import { Component, jsx, render } from 'Fiber';

class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <div id="app">Hello World!</div>
        <Doc foo={true} />
      </div>
    );
  }
}

class Doc extends Component {
  componentWillMount() {
    console.log(this.props.foo);
  }

  render() {
    return (
      <p>Document</p>
    );
  }
}

const Store = () => {
  return (
    <div>Hello</div>
  );
}

render(<App />, document.getElementById('root'));
