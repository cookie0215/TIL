import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      count: state.count + 1,
    };
  }
  return state;
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Function1 : You Clicked {state.count} times</p>
      <button onClick={click}>Click me!</button>
    </div>
  );

  function click() {
    dispatch({ type: 'PLUS' });
  }
}