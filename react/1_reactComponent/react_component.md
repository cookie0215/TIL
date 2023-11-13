# [TIL] React_Component

<br />

### component (컴포넌트)
- 재활용 가능한 UI 구성 단위   
  → 하나의 사이트에 헤더, 푸터, 배너영역 등으로 각각의 구성 요소들을 컴포넌트로 나누어 관리한다.  

<br />

### component의 특징
- 재활용하여 사용할 수 있다.
- 코드 유지보수에 좋다.
- 해당 페이지가 어떻게 구성되어 있는지 한 눈에 파악하기 좋다.
- 컴포넌트는 또 다른 컴포넌트를 포함할 수 있다.   
  (부모 컴포넌트 안에 자식 컴포넌트를 넣을 수 있다!)  

<br />
<br />

# component의 종류
컴포넌트 선언 방식에는 2가지가 존재한다.  
*컴포넌트의 이름을 지정할 때 반드시 **첫글자는 대문자**로 사용해야 한다!!*

<br />

## 1. Class Component
- 클래스 컴포넌트를 정의할 때 반드시 `render()`함수를 작성해야 한다!  
  그리고 그 안에 JSX를 **return**키워드로 반환해줘야 한다.

<br />

**< Class Component 작성 및 사용 방법 >**

```javascript
// 정의
class 컴포넌트이름 extends React.Component {
     render() {
         return jsx 코드 잣성
     }
}

// 사용
ReactDOM.render( <컴포넌트이름 />, 컴포넌트를 위치시킬 곳을 작성 );
```

<br />

***[연습] classComponent 만들어서 사용해보기***

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>class컴포넌트와 function컴포넌트</title>

  <!-- react CDN연결 -->
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>

  <!-- Babel CDN연결 -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script type="text/babel">
  class ClassComponent extends React.Component {
    render() {
      return <div>Hello React!</div>;
    }
  }

  ReactDOM.render(
    <ClassComponent />,
    document.getElementById('root')
  );
</script>
</html>
```
![image](https://user-images.githubusercontent.com/81572770/148353990-c311eeeb-5d51-4236-9e71-82ef59c66a77.png)

<br />
<br />

## 2. Function Component
- 함수 컴포넌트를 정의하는 방법에는 일반 function형태와 화살표 함수 형태, 이렇게 2가지가 있다.

<br />

### 2-1. 일반 function 형태의 컴포넌트
- 기존에 자바스크립트에서 함수를 작성하듯이 작성해주면 되는데, 이때 jsx를 return키워드로 반환해줘야 한다! 

<br />

**< 일반 function Component 작성 및 사용 방법 >**

```javascript
// 정의
function 컴포넌트이름() {
  return jsx 코드 잣성
}

// 사용
ReactDOM.render( <컴포넌트이름 />, 컴포넌트를 위치시킬 곳을 작성 );
```

<br />

***[연습] 일반 functionComponent 만들어서 사용해보기***

```html
<!-- CDN은 연결되어 있는 상태 -->
<body>
  <div id="root"></div>
</body>
<script type="text/babel">
  // 정의
  function FuctionComponent() {
    return <div>Hello React!</div>;
  }

  // 사용 방법 (classComponent와 동일)
  ReactDOM.render(
    <FuctionComponent />,
    document.getElementById('root')
  )
</script>
```

<br />

### 2-2. arrow function 형태의 컴포넌트
- 자바스크립트 화살표 함수를 작성하듯이 작성하면 된다.
  화살표 함수의 특징은 화살표 함수안에 별도의 코드 없이 `return`키워드만 있다면  
  `{}`와 `return`키워드를 생략해서 사용할 수 있다!

<br />

**< arrow function Component 작성 및 사용 방법 >**

```javascript
// 정의
// 축약) const 컴포넌트이름 = () => return <div>Hello React!</div>;
const 컴포넌트이름 = () => {
  return <div>Hello React!</div>;
}

// 사용
ReactDOM.render( <컴포넌트이름 />, 컴포넌트를 위치시킬 곳을 작성 );
```

<br />

***[연습] arrow functionComponent 만들어서 사용해보기***

```html
<!-- CDN은 연결되어 있는 상태 -->
<body>
  <div id="root"></div>
</body>
<script type="text/babel">
  const FuctionComponent = () => {
    return <div>Hello React!</div>;
  }

  // 사용 방법
  ReactDOM.render(
    <FuctionComponent />,
    document.getElementById('root')
  )
</script>
```