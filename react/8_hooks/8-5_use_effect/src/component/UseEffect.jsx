import { useState, useEffect } from 'react';

function Practice() {
  const [conuter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const click = () => {
    setCounter((prev) => { return prev + 1 })
  }
  const onChange = (e) => {
    setKeyword(e.target.value);
  }

  console.log('run all the time');

  useEffect(() => {
    console.log('click run only once');
  }, [])

  // input에 keyword(입력창에 값이 입력될 때) keyword 부분만 실행시켜준다.
  useEffect(() => {
    if (keyword !== '') {
      console.log('Search for', keyword);
    }
  }, [keyword])


  return (
    <div className="App">
      <h1>{conuter}</h1>
      <button onClick={click}>click me!</button>

      <br />

      <input
        onChange={onChange}
        type='text'
        placeholder='Search here...' />
    </div>
  );
}

export default Practice;
