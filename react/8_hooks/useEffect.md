# [TIL] React_useEffect
useEffect는 라이프 사이클 혹 중 `componentDidMount()`,`componentDidUpdate`, `ComponentWillUnMount` 이 3개를 대체해서 사용할 수 있다.    
(대체해서 사용할 순 있지만, 저 3개의 훅과 useEffect가 완전 동일한 기능을 하는 것은 아니다!)

→ 즉, useEffect는 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook   

<br />
<br />

## useEffect 형태

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

- 두번째 파라미터 배열에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 특정 값이 업데이트 될 때에도 호출된다.

<br />

### `ComponentWillUnMount` 대체해서 사용할 때 & 업데이트 되기 직전에 사용
- useEffect안에 return문을 작성해서 cleanup함수를 반환함

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

→ 첫번째 렌더링 상황에서는 return문이 반환되지 않고, 그 다음에 렌더링되기 직전에 해당 retuen문이 먼저 반환된 후, return문 밖에 있는 실행문이 출력된다.!