import { useState, useEffect } from 'react';

function Practice1() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const click = () => {
    setCounter((prev) => { return prev + 1 })
  }
  const onChange = (e) => {
    setKeyword(e.target.value);
  }

  console.log('run all the time');

  useEffect(() => {
    console.log(`I run when ${counter} counter change`);
  }, [counter])

  // input에 keyword(입력창에 값이 입력될 때) keyword 부분만 실행시켜준다.
  useEffect(() => {
    if (keyword !== '') {
      console.log(`I run when keyword change, ${keyword}`);
    }
  }, [keyword])

  useEffect(() => {
    console.log(`I run when keyword & counter change`);
  }, [keyword, counter])


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={click}>click me!</button>

      <br />

      <input
        onChange={onChange}
        type='text'
        placeholder='Search here...' />
    </div>
  );
}

export default Practice1;
