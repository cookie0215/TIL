# [TIL] React_State

<br />

### State
- 컴포넌트 **내부에서 가지고 있는 컴포넌트의 상태값**으로,  
  동적 데이터를 다룰 때 사용한다.   
  (외부에서 값을 전달 받는 게 아니라 직접 컴포넌트내에서 state 관리하고 싶을 때 사용할 수 있다.)
- state,props 둘 다 변경되면 렌더링이 다시 진행된다.
- **state 객체** : 화면에 보여줄 컴포넌트의 정보(상태)를 지니고 있는 객체
- 각 컴포넌트안에 state가 있을 때 독립적으로 상태를 관리할 수 있다.
- setState에서 현재 state와 상태를 동일 시 하면 상태를 아무리 변경해도 실행이 무시된다.
- state가 업데이트될 때 비동기적으로 처리될 수 있다.   

<br />

> 💛잠깐! 알아두기
> 
> React Hooks(useState)이 나오기 전에는 state관리(상태관리)를 하려면   
> 함수 형태의 컴포넌트가 아닌 **클래스 형태의 컴포넌트**를 통해서    
> constructor 안에 this.state를 작성해서 사용했다.   
>
><br />
>
> <class 컴포넌트에서 state사용의 문제점>   
>  - 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어려움
>  - class는 사람과 기계를 혼동시키기 때문에 컴파일 단계에서 코드를 최적화하기 어렵게 만든다.
> - 함수 컴포넌트는 this값을 가질 수 없기 때문에 리액트 개발할 때 함수컴포넌트를 사용하다가    
> 상태관리를 할때는 다시 클래스컴포넌트로 바꿔서 작성해야 하는 번거로움이 있었음!    

<br />

→ 즉, 클래스형 컴포넌트가 가지고 있는 state 와  
  함수형 컴포넌트가 useState라는 함수로 사용하는 state 이렇게 2가지가 있다.
  (리액트 v16.8부터 Hook을 주로 사용하기 때문에 거의 class컴포넌트를 잘 사용하지 않는다...!)

<br />
<br />

## State 사용 방법

<br />

**<state 정의할 때>**  
- class 컴포넌트에서는 `constructor()` 메서드를 작성 설정
- 함수 컴포넌트에서는 `useState()`라는 함수로 작성해서 state를 관리한다.    
  (`useState()`의 인자를 값 대신 **함수로 전달**하면 상태를 초기화할때 한번만 실행할 수 있다!!!)

<br />

**<setState 상태값 변경할 때>**  
- setState() 안에 인자값을 **객체** 또는 **함수**로 받을 수 있다.
- setState로 state의 값을 변경한 다음, 다른 특정한 작업을 하고자 할 때에는 setState의 두 번째 파라미터에 콜백 함수(callback function)를 등록할 수 있다.  
*setState는*

<br />
<br />

### 1. class 컴포넌트에서 state 정의 및 사용 방법
- class 컴포넌트안에 state를 정의할 때 state만 가지고 정의하거나   
  `constructor()` 메서드를 작성하여 설정한다.   

  > 💛잠깐!  
  >
  > constructor()는 클래스형 컴포넌트의 생성자 메서드인데,   
  > 이 때 반드시 super(props)를 호출해줘야 한다!

<br />

- state를 내용을 작성할 땐 **객체 형태로 작성**해야 한다.   
  (이것을 'state객체'라고 한다!)
- state객체는 class 컴포넌트를 생성할 때, render()함수보다 위쪽에 작성되어야 한다.

- 정의한 state를 **조회**할 때는 this키워드를 사용해 `this.state.상태속성`으로 작성한다.

- 변경된 state값을 관리할 땐 `this.setState()` 메소드 형태로 작성

<br />

***[예제1] class컴포넌트에서 state 설정하기***

```javascript
// state 정의 및 조회
class 컴포넌트이름 extends Component{
  constructor(props){
    super(props); // constructor 정의 시 반드시 필요!
    this.state = { // state의 초기값 설정 부분
        counter:0
    };
  }

  render(){
    const { counter } = this.state;
    return (
        <div>
            <h1>{counter}</h1>
            <button
                onClick={()=>{
                  // setState로 state값을 변경시킬 수 있다.
                  this.setState({counter : counter+1})
                }}
            >
                1씩 증가버튼
            </button>
        </div>
    );
  }
}
```
→ state를 constructor()로 정의한 뒤, setState()에 객체로 인자값을 받아서 값을 변경시키고 있다.

<br />

```javascript
// setState를 위에처럼 객체로 받는 경우도 있으나, 인자를 함수로 받는 경우도 있다.
...
<button
  onClick={()=> {
    this.setState(prevState =>{
      return{
          number:prevState.counter + 1
      };
    });
    ...
```
→ 위에서 setState()에 인자값을 객체로 받을 수도 있지만 함수로 받아서 값을 변경시킬 수도 있다.


<br />
<br />

### 2. 함수 컴포넌트에서 state 정의 및 사용 방법
- 함수 컴포넌트에서는 `useState()`라는 함수로 작성해서 state를 관리

<br />

  > 💛잠깐!  
  > 
  > cdn을 통해 리액트를 사용할 때는 `React.useState()` 로 정의하면 되고,  
  > import키워드를 사용할 때는 `import React, { useState } from 'react'` 로 먼저 react패키지에서 useState 기능을 불러와야 한다!
 
<br />

- `const [배열아이템1, 배열아이템2] = useState('초기값');` 이렇게 구조분해할당으로 `useState()`을 사용한다.   
  (여기서 초기값을 값 대신, 함수로 전달할 수 있다.)

  > 🤔 **왜 구조분해할당으로 사용하는 걸까..?**
  > 
  > ```javascript
  > const 컴포넌트이름 = () => {
  >   const data = React.useState();
  >   console.log(data);  
  >   
  >   return (...)
  > };
  >
  > ...(중략)...
  > 
  > ```
  > 
  > useState()를 확인하고 싶어서 data라는 변수에 담아 값을 출력해보았다.  
  > [undefined , function(){}] 가 출력되는데, 
  > 여기서 undefined는 현재 state의 상태를 의미하고 function은 state상태를 변경할 때 사용되는 함수이다!  
  >  *(여기서 배열아이템이 함수인 요소는 데이터가 변경될 때 변경된 값을 화면에 보일 수 있도록 리렌더링 역할도 한다. )*
  > 
  > 그래서 useState()에 인자값을 넣어주면 변수 data의 초기값을 설정할 수 있다.
  >
  > ❓그런데 {counter}에 값을 설정하려면 어떻게 해야 할까?❓  
  >  현재 data가 배열로 출력되었으니, 각 배열 아이템에 접근하기 위해 data[0], data[1]로 작성해야 하는데....이건 굉장히 구식적인 방법이다.  
  > 그래서 저 방법 대신 **구조분해할당을 활용해서 배열의 각 아이템들을 추출할 수 있기 때문에 사용하는 것**이다!

<br />

***[예제]  함수컴포넌트에서 state를 아래와 같은 형태로 사용***

```javascript
const 컴포넌트이름 = () => {
  const [state, setState] = React.useState(0);
  const handlerClick = () => {
    setState((crr) => { return crr + 1 })
  }
}

...(중략)...

```

<br />
<br />

## state 끌어 올리기

> 끌어올리기란?   
>
> 끌어올린다는게 자식 컴포넌트에서 개별적으로 선언된 상태의 메모리주소를 각 자식 컴포넌트에서 관리하는게 아니라    
> 부모컴퍼넌트인 App에 선언한 상태의 메모리 주소를 자식컴포넌트인 Counter에서 공유하는 개념이다.   
>
> → 즉, App(부모)의 '자식' 컴포넌트에서 상태가 선언되어 있어서 이를 '부모' 컴포넌트인 App으로 상태 선언 위치를 변경하기 때문에 사용한 표현이다.

- 기존에 구현했던 상태에서 동일한 상태를 구현해야할 때 주로 사용한다.

<br />

```javascript
// App.js (부모)

import "./styles.css";
import { Counter } from "./Counter";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const props = {
    count,
    increase: 20,
    handlerClick: setCount
  };

  return (
    <div className="App">
      <h1>State 끌어올리기 실습</h1>
      <Counter count={count} increase={1} handlerClick={setCount} />
      <Counter count={count} increase={2} handlerClick={setCount} />
      <Counter {...props} />
    </div>
  );
}

```
```jsx
// Counter.jsx (자식 컴포넌트)

export const Counter = ({ count, increase, handlerClick }) => {
  return (
    <button onClick={() => handlerClick(count + increase)}>{count}</button>
  );
};
```