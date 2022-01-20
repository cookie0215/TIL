import { useState, useEffect } from 'react';

// 또다른 컴포넌트
function Hello() {
  /*
    function destroyFn(){
      console.log('destroyed  :(')
    }
    function effectFn(){
      console.log('created  :)')
      return destroyFn;
    }

    useEffect(effectFn, []);  
  */
  useEffect(() => {
    // 컴포넌트가 생성될 때 실행
    console.log('created  :)')

    // 컴포넌트가 파괴될 때 생성
    return () => console.log('destroyed  :(')
  }, [])
  return (
    <h1>Hello!</h1>
  );
}

function Practice2() {
  const [showing, setShowing] = useState(false);

  const click = () => {
    setShowing((prevState) => { return !prevState })
    console.log(showing);
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={click}>{showing ? 'Hide' : 'Show'}</button>
    </ div>
  );
}

export default Practice2;
