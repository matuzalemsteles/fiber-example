import Fiber, { Component, render } from 'Fiber';

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
    this.oi = this.props.foo;
  }
  
  teste(){
    console.log(this.oi)
  }

  render() {
    return (
        <div>
            <p>nevinha</p>
	        <p onClick={this.teste}>Document</p>
	  </div>
    );
  }
}

const Store = () => {
  return (
    <div>Hello</div>
  );
}

render(<App />, document.getElementById('root'));
