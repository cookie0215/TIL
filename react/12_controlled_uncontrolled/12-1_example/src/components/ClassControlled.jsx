import React from "react";

class ClassControlled extends React.Component {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <input
          type='text'
          value={value}
          onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  change = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value })
  }

  click = () => {
    console.log(this.state.value);
  }
}

export default ClassControlled;