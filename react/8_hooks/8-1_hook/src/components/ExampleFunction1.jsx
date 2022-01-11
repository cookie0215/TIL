import React from "react";

export default function ExampleFunction1() {
  const [count, setCount] = React.useState(0);

  function click() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Function1 : You Clicked {count} times</p>
      <button onClick={click}>Click me!</button>
    </div>
  );
}