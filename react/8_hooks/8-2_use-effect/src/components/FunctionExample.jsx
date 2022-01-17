import React from "react";

export default function FunctionExample() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('componentDidMount', count);
    console.log('componentDidUpdate', count);

    return () => {
      console.log('ComponentWillUnMount', count);
    }
  }, [])

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