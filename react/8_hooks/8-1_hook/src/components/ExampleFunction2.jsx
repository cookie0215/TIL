import React from "react";

// useState에 count를 직접 명시하지 않고 객체로 만들어서 지정한 경우
export default function ExampleFunction1() {
  const [state, setState] = React.useState({ count: 0 });

  function click() {
    // 변경상태를 의존적인 형태로 만들고 싶을 때 객체 대신, 함수형태로 사용할 수 있다.
    setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  return (
    <div>
      <p>Function2 : You Clicked {state.count} times</p>
      <button onClick={click}>Click me!</button>
    </div>
  );
}