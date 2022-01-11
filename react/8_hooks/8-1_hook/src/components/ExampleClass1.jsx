import React from "react";

export default class ExampleClass1 extends React.Component {
  state = { count: 0 };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Class : You Clicked {count} times</p>
        <button onClick={this.click}>Click me!</button>
      </div>
    );
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  }
}