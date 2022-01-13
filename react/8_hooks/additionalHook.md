# [TIL] React_Additional Hook
useState, useEffect 외에 추가적인 hook에 대해 정리한 내용입니다.

<br />

## useReducer

> < 형태 >  
>  
> const [현재state, dispatch] = useReducer(reducer함수, 상태 초기값);   
> <br />
> ***reducer*** *: state를 변경하는 로직이 담겨 있는 함수*   
> ***dispatch*** *: reducer함수에서 파라미터로 전달받아 사용하는 action 객체를 넣어서 실행*

<br />

- 상태를 업데이트 하는 방법 중 하나로 useState의 확장판

- useState는 컴포넌트 안에 state로직을 사용 해야 하지만,   
  useReducer는 컴포넌트와 state로직을 분리해서 사용할 수 있다.   
  → 즉, 컴포넌트 외부에서도 state관리를 할 수 있다.

- 컴포넌트에서 1개의 상태관리할 때는 useState가 편리하지만,   
  여러 state를 관리해야 할 땐 useReducer이 좋다.

<br />
<br />

### useReducer 사용 방법

1. 컴포넌트 외부에 상태 업데이트 로직을 담을 reducer 함수 작성   
  -  reducer함수는 state(현재상태)와 action(state의 조작을 위해 사용) 객체를 매개변수로 가져와서 새로운 상태를 반환하는 함수이다. 
  
  - action 객체는 업데이트와 관련된 정보를 가진 객체로써, 필수 프로퍼티로 type 값을 가진 객체 형태로 사용된다!   
    (대부분 type값을 대문자로 구성한다!)
  
    ```jsx
    const reducer = (state, action) => {

      return newState;
    }
    ```

<br />

2. useReducer함수 사용
  - dispatch를 reducer함수의 매개변수인 action객체를 받아서 사용한다.
    `dispatch({type: '대문자'})` 형태로 사용한다.

    ```jsx
      const [state, dispatch] = useReducer(reducer, 상태 initState);  
    ```

<br />
<br />
<br />

## useMemo
렌더링 최적화할 때 사용하는 hook    

> < 형태 >  
>  
> const 변수명 = useMemo(() => function, [deps]);

<br />

- 컴포넌트가 업데이트 되고 렌더링 될 때, 업데이트가 굳이 필요없는 컴포넌트까지 같이 리렌더링 된다.   
  이렇게 쓸데없이 렌더링이 계속 발생되면 성능이 떨어져서 느려질 수 있다.  
  이러한 문제를 방지 하기 위해 useMemo Hook을 사용한다.
  
- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.  

- 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣는다.   
- 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면,     
  등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용   
    
  → 즉, deps값이 변할 때만 첫번째 인자로 들어온 함수가 실행되어 재계산됨
<br />
<br />
<br />

## useCallback

<br />
<br />
<br />

## useRef