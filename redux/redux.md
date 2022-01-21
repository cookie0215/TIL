# [TIL] Redux_Redux란?
리액트로 예를 들면 최상위 컴포넌트에 수많은 자식 컴포넌트들이 복잡하게 얽혀 있을 때    
그 중 어떤 컴포넌트가 최상위 컴포넌트가 갖고 있는 데이터를 필요로 한다면    
porps를 통해 전달하거나 context를 활용해 전달할 수 있다.    

하지만 context는 전역적으로 데이터를 전달하기 때문에 잘 활용해야 하는데,    
이러한 context를 효과적으로 관리하기 위해 필요한 라이브러리가 redux이다.    

<br />
<br />

## Redux
- Javascript application들의 **state(상태)를 관리하는 방법**
- React로 인해 많이 사용하나, React에 의존하는 라이브러리는 아님.
- Angular, Vue.js, Vanilla JS 등 JS 언어내의 여러곳에서 사용가능함.

<br />

## Redux 특징
1. **Single source of truth**
    - 모든 상태는 하나의 저장소(store)안에 하나의 객체 트리 구조로 저장됨
    - 하나의 어플리케이션 안에는 하나의 store가 존재    
      (store를 여러개 생성해서 상태를 관리해서는 안된다!) 
      
      → 그 대신 reducer를 여러 개 만들어 관리 가능   

2. **State is read-only**
    - 상태는 읽기전용(불변) 데이터이며, 오직 action만 상태를 변경할 수 있다.   
    (기존의 상태를 변경시키지 않고 spread(전재연산자)를 이용해 기존 상태에서 새 상태를 추가 반환하는 형식을 사용한다)

3. **reducer (변화를 일으키는 함수)는 순수 함수여야 한다.**    
    *(순수함수: 반환(reture)값이 전달 인자(argument) 값에만 의존하는 함수)*
    - 전달받은 매개변수 state,action을 변형하지 않아야 하고, 반드시 새로운 상태를 반환 해야한다.
    - new Date(), random(), network요청 등 실행 할 때마다 다른 결과값이 나타나는 경우는 순수 함수가 성립되지 않기 때문에   
      reducer 함수의 바깥에서 redux 미들웨어를 사용하는 등으로 대체하여 처리해야 함 

<br />
<br />

## Redux 설치하기

<br />

1. `npm install redux` 해당 프로젝트 터미널에 입력    
  : reudx 패키지 설치

2. `import {createStore} from 'redux';`

<br />
<br />
<br />

## Redux 관련 개념

<br />

### Action
- 상태 변화를 일으킬 때 참조하는 객체   
  → 상태에 변화가 필요하다면 Action을 발생 시킴
- store(저장소)로 보내는 데이터 묶음
- 반드시 type속성이 존재해야 하며, type 작성 시, 대문자로 작성을 권장함      
  (type : 어떤 형태의 Action이 실행될 것인지를 나타내는 속성)

<br />

> **Action의 형태**    
> - payload 가 있는 action
> - payload 가 없는 action   
> 
> ```javascript
> {
>    type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
>    payload: "액션의 실행에 필요한 임의의 데이터",
> }
> ```

→  add같은 어떠한 action이 실행될 때, 어떤 데이터를 추가해서 넘겨줄지 설정해줘야 하기 때문에 payload가 필요    
  (이름은 내가 원하는대로 작성하면 됨!)

    ```jsx
    // 여기서 text는 내가 넘겨주고 싶은 데이터를 의미!
      {
        type: ADD_TODO,
        text: '코딩공부하기'
      }
    ```

<br />

- action.type을 작성할 때 대문자 문자열로 정의한 뒤, 변수에 담아서 활용하는 것을 권장
  → type작성 시, 오타 등으로 인해 에러 발생확률을 줄이기 위해 변수에 담아서 사용

  ```javascript
    const ADD = 'ADD';
    const MINUS = 'MINUS';

    const reducer = (count = 0, action) => {
      if (action.type === ADD) {
        return count + 1;
      } else if (action.type === MINUS) {
        return count - 1;
      } else {
        return count;
      }
    }
  ```

<br />

### Action 생성자 함수
- store의 내장 함수 중 하나인 Dispatch에 Action을 전달해야 하는데,     
  이때 Dispatch에 inline으로 action을 넣는 것이 불편하기 때문에 action객체를 **return 해주는 함수를 만들어놓는 것**

  ```javascript
  function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
  }
  ```

<br />
<br />

### Reducer

<br />

> 기본 형태 (초기값을 지정하지 않은 상태)   
>    
>  ```javascript  
>   const reducer = ((prevState, action)) => {
>      console.log(prevState);    // undefined
>     return newState();
>   }
> ```

<br />

- 상태를 변화시키는 로직이 담긴 함수   
  → 현재 상태와 Action을 이용해 새로운 상태를 만들어 낸다.    
  *(action을 통해 어떠한 행동을 정의했다면, 그 결과 어플리케이션의 상태가 어떻게 바뀌는지는 특정하게 되는 함수이다!)*

<br />

- reducer함수에서 action.type로직을 작성할 때 `switch ~ case`문으로 주로 사용    
  → if문을 사용해도 상관없으나, 대부분 switch문을 주로 사용함!

  ```javascript
    const ADD = 'ADD';
    const MINUS = 'MINUS';

    const reducer = (count = 0, action) => {
      switch (action.type) {
        case ADD:
          return count + 1;
        case MINUS:
          return count - 1;
        default:
          return count;
      }
    }
  ```

<br />

- prevState값을 지정해놓지 않으면 기본 상태값이 undefined가 할당됨   
  → reducer함수에서 초기값을 설정해 줄 수 있다.

    ```javascript  
    // action이 정의되었다고 가정
      const initialState = 0;   // 초기값 설정
      const reducer = ((state = initialState, action)) => {
        console.log(state);    // 0
        return state;
      }
    ```
<br />

- Immutable 방식으로 처리 (reducer를 통해서 state가 달라졌음을 redux가 인지해야 하기 때문)

<br />
<br />

### Store

- 데이터(상태)를 저장하는 부분 (저장소)   
: 상태가 관리되는 오직 하나의 공간
-하나의 프로젝트는 하나의 store만 가질 수 있음

<br />

> 형태    
>     
>  ```javascript  
>   const store = createStore(reducer);
>   
>   console.log(store);
> ```

<br />

![image](https://user-images.githubusercontent.com/81572770/150299006-1d3cda29-afda-42c3-b23c-561a3ec5202b.png)

<br />

**Store가 갖고 있는 내장함수들**

- `store.getState()`   
  - 현재 상태에 접근 가능    
    → 즉, 현재 state 상태를 알려준다!!

- `store.dispatch(action)`    
  - **action 객체를 인자로 전달**하여 store의 상태를 변경(업데이트)할 수 있는 유일한 방법임!    
    → 상태가 변경을 일으키기 때문에 변경된 상태를 보여줌

- `store.subscribe()`   
  - store 안에 있는 변화를 감지 
  - subscribe 파라미터에 함수 형태의 값을 받아올 수 있다.
  - subscribe 함수에 특정 함수를 전달하면, action이 dispatch 되었을때 마다 전달 해준 함수가 호출

- `store.replaceReducer`   
  - 원래 갖고 있는 reducer를 다른 reducer로 대체한다

<br />
<br />
<br />

*출처)*   
*[Koras02코딩웹](https://koras02.tistory.com/100?category=967574)*
