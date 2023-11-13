import React from "react";

class ClassUncontrolled extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log('initial render', this.inputRef);

    return (
      <div>
        <input
          type='text'
          ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount', this.inputRef);
    console.log('componentDidMount', this.inputRef.current.value);
  }

  click = () => {
    // input 요소의 현재 상태값을 꺼내서 전송하기

  }

}

export default ClassUncontrolled;