# [TIL] React_useEffect
class컴포넌트는 라이프 사이클 중 `componentDidMount()`,`componentDidUpdate`, `ComponentWillUnMount` 이 3개를 대체해서 사용할 수 있다.    
(대체해서 사용할 순 있지만, 저 3개의 훅과 useEffect가 완전 동일한 기능을 하는 것은 아니다!)

→ 즉, useEffect는 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook으로,   
  매번 렌더링 될때마다 또는 맨처음에만 렌더링 될 수 있도록 하고 싶을 때 ..등 useEffect를 사용할 수 있다.

<br />
<br />

## Side Effect (부수효과)
- 연산이나 함수 실행 시, 반환값 이외에 외부에서 관찰할 수 있는 변화가 있을 때 생기는 것을 의미
- 즉, 실행 결과에 부수효과가 있다면 사이드 이펙트를 갖고 있다고 생각하면 된다.    

ex) 데이터 가져오기, 타이머 설정하기, 수동으로 React 컴포넌트 DOM수정하기...등

<br />
<br />

## useEffect
- 뷰의 렌더링, 상태변화에 따라 사이드 이펙트를 실행하기 위한 Hook

### `componentDidMount()`,`componentDidUpdate` 기능을 대체해서 사용할 때

```jsx
useEffect(() => {
  // 실행문
  console.log('출력');
}, []);
```

<br />

- useEffect의 첫번째 파라미터에는 **함수**    
  useEffect의 두번째 파라미터에는 의존값이 들어있는 **배열** (deps)을 넣는다.

- 두번째 파라미터를 작성하지 않고 첫번째 함수만 작성하면    
    **항상 렌더링된 직후에 useEffect안의 실행문이 실행**된다!   
 
- 두번째 파라미터를 빈배열로만 작성하면   
  첫번째 렌더링된 직후에만 useEffect안의 실행문이 실행된다.
  → dependency (감시할 대상)이 없기 때문에 맨 처음 페이지가 로드될 때만 실행되고    
    그 이후로는 감시할 대상이 변화했는지 여부를 알 수 없기 때문에 함수가 실행되지 않는다!

- 두번째 파라미터 배열에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 특정 값이 업데이트 될 때에도 호출된다.
  → 두번째 파라미터에 입력된 배열값을 dependency라고 하며, dependency는 react.js가 감시하는 대상이다.   
  그래서 dependency가 변화하게 되면 첫번째 파라미터인 함수를 실행하는 것이다!

<br />

***[연습1] 클릭할 때마다 run all the time이, 렌더링이 맨처음에만될 때 run only once가 console에 출력되도록 만들기***

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [conuter, setCounter] = useState(0);
  const click = () => {
    setCounter((prev) => { return prev + 1 })
  }

  // 맨 처음 렌더링될 때 + 클릭할 때마다 렌더링될 때 발생
  console.log('run all the time');

  // 맨처음에만 렌더링될 때 발생
  useEffect(() => {
    console.log('run only once');
  }, [])

  return (
    <div className="App">
      <h1>{conuter}</h1>
      <button onClick={click}>click me!</button>
    </div>
  );
}

export default App;

```

![image](https://user-images.githubusercontent.com/81572770/149291658-474ad594-23e0-4da5-b6ab-27d6aaceb590.png)

→ `console.log('run all the time');`은 당연히 맨처음에 페이지가 로드되거나, state 가 변경될 때마다 렌더링 되도록 만들었고,    

`useEffect()`부분의 `console.log('run only once');`은 현재 두번째 파라미터값이 빈배열로 받고 있기 때문에   
페이지가 맨처음 로드되었을 때만 안에 있는 console문이 실행되기 때문에   
console창에 1번만 출력되고 있는 것이다.

<br />

***[연습2] 연습1번의 click 상황에 keword상황을 추가하고 각각 state가 변경될 때 각 이벤트상황만 렌더링될 수 있도록 만들기***

```jsx
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
    console.log('Search for', keyword);
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

```
→ `console.log('Search for', keyword);`을 useEffect를 사용하지 않고 전역으로 작성했다면,    
input창에 값을 입력할때도 렌더링되고 count의 click버튼을 눌렀을때에도 렌더링 되어 console창에 계속 실행문이 출력되는 것을 볼 수 있다.

input창의 값이 변할때만 `console.log('Search for', keyword);` 출력될 수 있도록 만들기 위해 useEffect를 사용해야 한다.    

이때 두번째 파라미터를 빈배열로만 두면 맨처음 렌더링될때만 실행되기 때문에   
state 값을 작성해줘야 한다!!

<br />

***[연습3] 연습2번문제의 'Search for'실행문이 맨처음 렌더링될 때는 출력되지 않도록 만들기***

```jsx
useEffect(() => {
    if (keyword !== '') {
      console.log(`I run when keyword change, ${keyword}`);
    }
  }, [keyword])
```
→ 조건문을 활용해서 입력값이 아무것도 없을 땐 console문이 실행되지 않도록 만들 수 있다.

<br />
<br />

### `ComponentWillUnMount` 대체해서 사용할 때 & 업데이트 되기 직전에 사용
- useEffect안에 **return을 사용해서 cleanup함수를 반환**함
- 해당 컴포넌트가 삭제될 때(사라질 때) API가 호출되도록 만든다.

```jsx
useEffect(() => {
  // 실행문
  console.log('출력');

  return () => {
    // cleanup (렌더가 실행되기 직전에 호출)
    console.log('반환');
  }

}, []);
```

<br />

- 두번째 파라미터를 빈배열로만 작성하고,   
  useEffect안에 **return문을 작성하면 unMount될 때 cleanup함수가 반환**된다.

- 두번째 파라미터 배열에 특정 값을 넣으면,   
  **특정값이 업데이트 되기 직전에 cleanup 함수를 반환**한다.



 