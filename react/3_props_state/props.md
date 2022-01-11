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


