//import React from 'react';
import ReactDOM from 'react-dom';




/*

class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

var porn = ['natasha','ice','mona']

function App() {
  // Declare a new state variable, which we'll call "count"
const [count, setCount] = useState(0);

return (
  <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
);
}

*/


class Top extends React.Component {
  render() {
    return (<h1 className="top">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="paragraph">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}


ReactDOM.render(
  <Main></Main>,
  document.getElementById('react-app')
);
