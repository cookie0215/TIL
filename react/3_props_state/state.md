# [TIL] React_State

<br />

### State
- 컴포넌트 **내부에서 가지고 있는 컴포넌트의 상태값**으로,  
  동적 데이터를 다룰 때 사용한다.   
- state,props 둘 다 변경되면 렌더링이 다시 진행된다.
- **state 객체** : 화면에 보여줄 컴포넌트의 정보(상태)를 지니고 있는 객체

<br />

> 💛잠깐! 알아두기
> 
> React Hooks(useState)이 나오기 전에는 state관리(상태관리)를 하려면   
> 함수 형태의 컴포넌트가 아닌 **클래스 형태의 컴포넌트**를 통해서    
> constructor 안에 this.state를 작성해서 사용했다.   
>
> *→ 함수 컴포넌트는 this값을 가질 수 없기 때문에 리액트 개발할 때 함수컴포넌트를 사용하다가*   
> *상태관리를 할때는 다시 클래스컴포넌트로 바꿔서 작성해야 하는 번거로움이 있었음!*

<br />

→ 즉, 클래스형 컴포넌트가 가지고 있는 state 와  
  함수형 컴포넌트가 useState라는 함수로 사용하는 state 이렇게 2가지가 있다.

<br />
<br />

## State 사용 방법

<br />

**<state 정의할 때>**  
- class 컴포넌트에서는 `constructor()` 메서드를 작성 설정
- 함수 컴포넌트에서는 `useState()`라는 함수로 작성해서 state를 관리한다.

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
  
  > 💛잠깐!  
  > 
  > cdn을 통해 리액트를 사용할 때는 `React.useState()` 로 정의하면 되고,  
  > import키워드를 사용할 때는 `import React, { useState } from 'react'` 로 먼저 react패키지에서 useState 기능을 불러와야 한다!
 
<br />

- `const [배열아이템1, 배열아이템2] = useState('초기값');` 이렇게 구조분해할당으로 `useState()`을 사용한다.

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