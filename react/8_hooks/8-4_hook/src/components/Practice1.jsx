import { useState } from "react";
import ShowState from "./Practice2";

export default function Practice() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const increaseNumber = () => {
    setNumber((number) => number + 1)
  }
  const decreaseNumber = () => {
    setNumber((number) => number - 1)
  }
  const onChangeTextHandler = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={increaseNumber}>+</button>
      <button onClick={decreaseNumber}>-</button>
      <input
        type="text"
        placeholder="Last Name"
        onChange={onChangeTextHandler}
      />
      <ShowState number={number} text={text} />
    </div>
  )
}