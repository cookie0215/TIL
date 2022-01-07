# [TIL] React_Props

<br />

### Props
- 컴포넌트 외부에서 컴포넌트에게 전달하는 데이터  
  (부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용한다.)
- props와 state 둘다 변경이 발생하면 렌더링이 다시 발생된다!
- props는 읽기 전용이기 때문에 컴폰너트 자체의 props를 수정할 수 없다.

<br />
<br />

## props 사용방법

### 함수 컴포넌트에서 prop 사용하는 방법

<br />

### class 컴포넌트에서 prop 사용하는 방법

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

