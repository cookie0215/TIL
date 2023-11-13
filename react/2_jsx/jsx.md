# [TIL] React_JSX

<br />

### JSX (JavaScript Syntax Extension)

- JSX는 리액트에서 사용하는 자바스크립트 확장 문법으로, **React에서 UI를 렌더할 때 사용하는 문법**이다.   
  HTML과 비슷하게 생겼지만, 말 그대로 비슷하게 생긴 것일 뿐이지 나중에는 결국 모두 JavaScript로 변환되는 것들이다!!
- JSX를 JavaScript로 변환하는 과정은 **Babel**이라는 도구가 담당한다.

<br />

> <잠깐!> Babel 이란?   
>   
> ECMAScript 2015+(ES6 ~ 8)로 작성한 코드를 구형 브라우저에서도 동작할 수 있도록   
> ES5자바스크립트 파일로 변환해주는 역할을 하기 때문에 모든 브라우저에서 동작하도록 호환성을 지켜준다.

<br />
<br />

### JSX의 장점
- HTML 태그를 그대로 사용하기 때문에 보기 쉽고 익숙하다.
- HTML 태그를 사용하는 동시에 자바스크립트도 JSX 안에서 동작하게 할 수 있다.

<br />
<br />

### JSX의 특징
- 표현식(값으로 평가될 수 있는 것)을 포함한다.
  ⇒ 참고로 if문은 표현식이 아니기 때문에 JSX에 사용할 수 없고, 삼항 연사나 또는 `&&`를 사용해서 값을 넣는다!
- JSX자체가 표현식(값)이 될 수 있다.   
  ⇒ `{ }` 를 통해 변수로 만들어 넣을 수 있다!
- JSX로 작성된 태그에 속성만 적고 속성 값을 적지 않으면 true가 기본값이 된다.

```javascript
const element = (
  <button
    className="hello"
    style={{color:"#fff" , backgroundColor: "blue"}} 
    disabled>
    클릭해주세요
  </button>
);

```
<br />

- boolean, null, undefined 는 무시되기 때문에 아래 예제의 `<div>`는 모두 같은 결과값을 가진다.

```html
<!-- 모두 <div></div>와 동일하다! -->
<div></div>

<div />
<div>{true}</div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
```
<br />

- JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM에서 HTML Attribute(속성) 이름 대신 camelCase 프로퍼티 명명 규칙을 사용한다.
<br />

  javscript     |     JSX
  |:-----------:|:----------------:|
  class         |  **className**
  tabindex      |  **tabIndex**   
  lable for     |  **lable htmlFor**

- 반드시 태그를 닫은 상태로 작성해야 한다!    
  ex) `<br />` , `<input />` , `<span></span>`  

- **최상위 요소는 1개만 작성**되어야 한다!
- 최상위 요소를 2개의 형태로 만들어서 렌더링하고 싶을 땐 `<></>` Fragment를 활용해서 감싸줘야 한다!
  ex) <><div></div> <div></div></>
- 최상위 요소를 return하는 경우, `()` 소괄호로 감싸줘야 한다.   
  (prettier를 사용하면 자동으로 소괄호가 만들어 진다.)  


<br />
<br />

## JSX 연결하기
JSX문법으로 작성된 코드를 Babel이 순수 javascript코드로 컴파일 시켜주기 때문에   
Babel CDN을 연결하고, 작성할 script태그의 type을 text/babel"로 지정해줘야 한다.

```html
<!-- babel CDN 연결 후, 작성할 script에 type="text/babel" 속성을 작성해야 정상 실행한다. -->

<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
  // 이 안에 리액트로 만들 내용을 적어야 실행된다!!!
</script>
```

<br />