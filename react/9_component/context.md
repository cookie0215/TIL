# [TIL] React_Context
prop를 이용해서 컴포넌트간에 데이터를 전달할 때   
부모와 직계 자식에게 단방향(한쪽방향)으로만 데이터를 전달할 수 있다.

그래서 prpos를 사용해 최상위 (부모)컴포넌트에서 하위의 모든 자식 컴포넌트를 거쳐    
최하위 (자식)컴포넌트로 데이터를 전달하는 것은 매우 비효율 적이다.

이러한 문제를 해결하기 위해 context API가 나타났다!

<br />

## context
- 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 데이터의 흐름과는 상관없이 **전역적인 데이터를 다룰 때 사용**   
  → 즉, context는 일일이 props를 전달하지 않고 컴포넌트 트리 전체에 데이터를 제공할 수 있다.

- 공통 부모 컴포넌트에 Context의 `Provider`를 사용하여 **데이터를 제공**
- 데이터를 사용하려는 컴포넌트에서 Context의 `Consumer`를 사용하여 **실제로 데이터를 사용**
- context로 state끌어올리기가 가능하다.
- context의 데이터가 바뀌면 context를 참조하고 있는(Consumer) 모든 컴포넌트가 리렌더링되기 때문에   
  자주 변하는 컴포넌트에는 사용하지 않는게 좋다.
- 재사용이 어려움

<br />

### Provider
- 정의한 context를 하위 컴포넌트에게 전달하는 역할
- provider를 전달하는 변수는 꼭 **value를 사용**해야 한다.
- 전달 받는 컴포넌트의 제한 수는 없다.
- provider에 하위 provider배치가 가능하며, 이럴 땐 하위 provider값이 우선시 된다.
- provider하위에 context를 가진 component는 provider의 value로 가진 state가 변화할 때마다, 전부 re render된다.

<br />

### Consumer
- context 변화를 구독하는 컴포넌트
- context의 자식은 함수(컴포넌트)여야 한다.
- 상위 provider가 없다면 createContext()에서 정의한 defaultValue를 가진다.

<br />
<br />

## context 사용 방법

### context를 활용해 데이터 생성

- `createContext`라는 함수를 사용해 context를 생성한다.   
  ( React Context는 전역 데이터를 담고 있는 하나의 저장 공간으로 생각한다.)    

  *createContext의 첫번째 인자로 기본값을 전달할 수 있다.*

    ```javascript
      import { createContext } from "react";
      const PersonContext = createContext();

      // PersonContext 이름의 context컴포넌트를 생성해서 내보내고 있다.
      export default PersonContext;
    ```

<br />

2. 만든 context컴포넌트에 `.Provider`를 붙인다.    
  (만약 만든 context컴포넌트를 index.js(최상위)파일에 넣고 Provider를 붙이면 App.js가 갖고 있는 모든 컴포넌트를 사용할 수 있다. )

3. provider를 전달하는 context컴포넌트에 value를 작성한다.   
  (value : 자식 Component에게 값을 전달하기 위한 설정!)

    ```javascript
      // index.js
      <PersonContext.Provider value={}>
        <App />
      </PersonContext.Provider>
    ```
<br />
<br />

### Consumer : 데이터를 get 하기 (1)

1. 하위 컴포넌트에서 Consumer로 context에 접근한다.    
  Consumer는 class컴포넌트, 함수 컴포넌트 모두 사용할 수 있다.

2. 그 안에 value값을 함수로 작성해서 처리한다.

<br />

### static contextType : 데이터를 get 하기 (2)

1. class 하위 컴포넌트를 만들어 `static contextType`으로 context를 설정한다.

2. 설정한 context를 `this.context`로 변수에 담아 가져올 수 있다.

→ 참고로 `static contextType`은 여러개의 context를 지정할 수 없다는 단점이 있다!

<br />

### useContext : 데이터를 get 하기 (3)
- 가장 많이 사용되는 방식이다.

1. useContext로 context를 인자로 호출한다.

2. context를 호출한 해당 useContext를 변수에 담는다.    
  (변수 이름을 value 또는 value가 갖고 있는 값으로 지정하면 된다.)

  ```jsx
    const persons = useContext(PersonContext);
  ```

3. 리턴되는 값이 value로 보면 된다!