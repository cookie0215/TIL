# [TIL] React_Props

<br />

### Props
- 컴포넌트 외부에서 컴포넌트에게 전달하는 데이터  
  (부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용한다.)
- props와 state 둘다 변경이 발생하면 렌더링이 다시 발생된다!
- props는 읽기 전용이기 때문에 컴포너트 자체의 props를 수정할 수 없다.

<br />
<br />

## props 사용방법

### 함수 컴포넌트에서 props 사용하는 방법

```javascript
// 함수 컴포넌트
function Component(props) {
  return (
    <div>
      <h1>{props.message} 이것은 함수로 만든 컴포넌트입니다.</h1>
    </div>
  )
}

ReactDOM.render(
  <Component message='hello~' />,
  document.querySelector("#root")
);
```
→ 함수 컴포넌트에서는 props를 전달 받을 때 함수 인자로 props를 전달 받기 때문에 this가 필요 없다.   

그리고 위의 코드처럼 직접 props라고 작성해도 되지만,   
대부분의 경우 아래와 같이 작성해서 props를 전달한다!

<br />

```javascript
function Component({message}) {
  return (
    <div>
      <h1>{message} 이것은 함수로 만든 컴포넌트입니다.</h1>
    </div>
  )
}

ReactDOM.render(
  <Component message='hello~' />,
  document.querySelector("#root")
);
```
→ 이렇게 props 대신 `{ message }`로 작성할 수 있는 이유는 props가 오브젝트이기 때문이다.

<br />

***여러개의 props 전달하기***

```javascript
function Component({message , big}) {
  return (
    <div>
      <h1 
        style={{
          color: 'red',
          fontSize: big ? 24 : 16
        }}
      >
        {message} 이것은 함수로 만든 컴포넌트입니다.
      </h1>
    </div>
  )
}

ReactDOM.render(
  <Component message='hello~' big={true} />,
  document.querySelector("#root")
);
```
<br />

***[잠깐!] 헷갈리지 말기***   

Html요소는 속성에 이벤트 리스너를 넣을 수 있지만, 만든 컴포넌트에는 이벤트 리스너를 속성형태로 붙일 수 없다!!

```javascript
const root = document.getElementById('root');

const Btn = ({ text, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        color: 'white',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
const App = () => {
  const [value, setValue] = React.useState("Save Changes");
  const chageValue = () => setValue("Revert Changes");
  return (
    // 여기 컴포넌트에 작성된 onClick은 이벤트 리스너가 아니다!
    <div>
      <Btn text={value} onClick={chageValue} />
      <Btn text="Comfirm" />
    </div>
  )
};

ReactDOM.render(<App />, root);
```
→ `<Btn text={value} onClick={chageValue} />` 여기 Btn컴포넌트에 onClick이 작성된 것을 볼 수 있다.   
하지만 혼동하지 말아야 할 것이 **여기 onClick은 단순히 props의 이름으로 지어준 것**일 뿐, 이벤트 리스너가 결코 아니다!   

즉, 저 부분을 onClick이란 이름 대신 다른 거로 지어도 상관없고, 다만 props역할을 해야 하기 때문에 만든 이름을 Btn컴포넌트를 만든 함수의 인자로 똑같이 넣어줘야 한다!   

그리고 위의 Btn 함수(button태그 안에 있는 onClick이 진짜 이벤트 리스너의 역할을 하고 있다!)

<br />
<br />

### class 컴포넌트에서 props 사용하는 방법

```javascript
// class 컴포넌트
  class Component extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트입니다.</h1>
        </div>
      )
    }
  }

  ReactDOM.render(
    <Component message='hello~' />,
    document.querySelector("#root")
  );
```
→ class 컴포넌트에서 props를 전달 받을 땐 this.props로 작성해야 한다!

<br />
<br />

## dafaultProps
- props를 통해 값을 전달 받지 못했을 때 기본값으로 보여줄 수 있도록 만든 것  
  → props를 따로 지정해주지 않아도 기본값으로 전달 해주는 props를 의미

<br />

### defaultProps 사용방법 2가지
함수 컴포넌트일때와 class컴포넌트 공통적으로 사용할 수 있는 방법이 있고, class컴포넌트 내에서만 사용할 수 있는 방법이 존재한다.

<br />

1. 함수, class 컴포넌트 둘 다 사용할 수 있는 경우

> 형태
> 
> `컴포넌트이름.defaultProps = { 속성: '값'}`

<br />

***[연습1] 함수컴포넌트에 defaultProps 사용하기***

```javascript
function Component(props) {
  return (
    <div>
      <h1>{props.message} 이것은 함수로 만든 컴포넌트입니다.</h1>
    </div>
  )
}

Component.defaultProps = {
  message: '☆☆☆☆☆',
}

ReactDOM.render(
  <Component />,
  document.querySelector("#root")
);
```
![image](https://user-images.githubusercontent.com/81572770/148507804-822c9b45-b85f-44ce-b6c0-d67590892748.png)


<br />

2. class 컴포넌트 내부에서만 사용할 수 있는 경우

> 형태
> 
> `static defaultProps = { 속성: '값'}`
> *class컴포넌트 안에 선언해야 한다!*

<br />

***[연습2] class컴포넌트에 defaultProps 사용하기***

```javascript
class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트입니다.</h1>
      </div>
    )
  }

  static defaultProps = {
    message: '★★★★★'
  }
}

ReactDOM.render(
  <Component />,
  document.querySelector("#root")
);
```
![image](https://user-images.githubusercontent.com/81572770/148507680-f7a9ea6d-964c-4d4c-bce1-2f7d223cecee.png)

<br />
<br />

## props drilling
: props는 부모, 자식 간의 결합도가 없다는 장점은 있으나,   
  props 전달이 길어지면 추적이 어려워 진다는 단점이 있다.   
  이것을 props drilling 이라고 한다.

<br />
<br />

## propTypes
*[propTypes 공식문서](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)*

- 부모로부터 전달받은 prop의 데이터 type을 검사하기 위해 사용   
  → 자식 컴포넌트에서 명시해 놓은 데이터 타입과 부모로부터 넘겨 받은 데이터 타입이 일치하지 않으면 콘솔에 에러 출력

- propTypes 작성 시, 대소문자 꼭 확인하기!!

- 참고) 개발모드에서 작동한다!

<br />

### propTypes 사용방법

1. propTypes을 CDN연결 또는 npm에서 설치한다.

    > CDN 연결   
    > `<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>`
    > 
    > npm 설치    
    > `npm i prop-types`
    > <br />  
    > → *참고로 prop-types 설치 시, npm audit fix 명령어가 보이는데*  
    > *되도록 이건 설치하지 말자...!*   
    > *왜냐하면 npm v6이후에 나온 기능으로 모듈의 취약점을 검사해주지만, **잘 동작하던 프로젝트가 정상적으로 동작하지 않을 수 있다는 문제점**이 있기 때문이다!*

<br />

2. `import PropTypes from 'prop-types';`   
  npm으로 설치 시, 설치한 prop-types 를 프로젝트 파일에 가져온다.

<br />

3. props를 통해 가져온 name의 데이터 타입을 string으로 지정해준다. 

    ```jsx
    import PropTypes from 'prop-types';

    export default function Component = ({ name }) => {
      return (
        <h1>Hello, {name}</h1>
      );
    }

    // name의 데이터 타입을 string으로 지정 
    Component.propTypes = {
      name: PropTypes.string
    };

    ReactDOM.render(
      <Component name={'Welcome'} />,
      document.querySelector("#root")
    );
    ```
    → 여기 Component안에 name의 props를 `name={'Welcome'}` 이렇게 작성하면 타입에러 없이 잘 동작하는 것을 볼 수 있다.

    하지만 `name={20}` 이렇게 문자열대신 다른 타입들을 작성하면    
    *`"type: Invalid prop `name` of type `number` supplied to `Component`, expected `string`."`* 이라는 에러 메세지가 출력되는 것을 볼 수 있다.

<br />
<br />

### `isRequired`
- 작성한 PropTypes뒤에 `.isRequired`를 붙여주면 해당 prop을 **필수 prop으로 인식**하고,    
만약 prop의 값이 없거나 잘못되었을 경우 콘솔 창에서 에러가 출력되는 것을 볼 수 있다.   

    <br />

    ***[예제] PropTypes에 isRequired을 설정하고, Component에 prop값을 전달하지 않았을 때***

    ```jsx
    import PropTypes from 'prop-types';

    export default function Component = ({ name }) => {
      return (
        <h1>Hello, {name}</h1>
      );
    }

    // name의 데이터 타입을 string으로 지정 
    Component.propTypes = {
      name: PropTypes.string.isRequired
    };

    ReactDOM.render(
      <Component />,
      document.querySelector("#root")
    );
    ```
    → name props에 `isRequired` 를 지정했기 때문에 반드시 prop값이 존재해야 한다.   
    하지만 현재 예제에선 `<Component />` 에 따로 전달 받는 props가 없기 때문에   
    *`type: The prop `name` is marked as required in `Component`, but its value is `undefined`.`* 이렇게 콘솔창에 에러가 발생하는 것이다!

<br />
<br />

### prop-types의 종류

- `array` : 배열
- `arrayOf` : 특정 propType으로 이루어진 배열
- `bool` : true or false 값
- `func` : 함수
- `number` : 숫자
- `object` : 객체
- `string` : 문자열
- `symbol` : ES6의 Symbol
- `node` : 렌더링할 수 있는 모든 것(숫자, 문자열, JSX코드)
- `instanceOf` : 특정 클래스의 인스턴스(ex: instanceOf(MyClass))
- `oneOf(['dog', 'cat'])` : 주어진 배열 요소 중 값 하나
- `oneOfType([React.PropTypes.string, PropTypes.number])` : 주어진 배열 안의 종류 중 하나
- `objectOf(React.PropTypes.number)` : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
- `shape({ name: PropTypes.string, num: PropTypes.number })` : 주어진 스키마를 가진 객체
- `any` : 아무 종류