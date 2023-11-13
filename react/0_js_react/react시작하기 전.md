# [TIL] JS와 React 비교하기
vanilla js로 만든 것과 react로 만든 것의 코드 비교해보기

<br />

***[예제] 버튼을 클릭하면 count가 1씩 증가하도록 만들기***

<br />

## 자바스크립트 버전

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>Total Click : 0 </p>
  <button id="btn">Click me!</button>
</body>
<script>
  let counter = 0;
  const btn = document.getElementById('btn');
  const p = document.querySelector('p');

  btn.addEventListener('click' , handleClick);

  function handleClick() {
    counter += 1;
    p.innerText = `Total Click : ${counter}`;
    console.log('I have been clicked');
  }
</script>
</html>
```

<br />
<br />

## 리액트 버전 (CDN 연결로 진행)
- 리액트는 vue.js처럼 npm으로 설치해서 사용하거나 CDN을 통해서 사용할 수 있다.
- 리액트의 핵심 모듈 2가지 (cdn연결 시, 반드시 2개의 cdn을 연결해야 한다!)
  1. `react`
  : 리액트(또는 리액트 컴포넌트)를 만들 때 사용
  
  2. `react-dom`
  : 리액트로 만든 태그(또는 컴포넌트)를 html element에 연결 시켜주는 역할을 한다.

<br />

- HTML에 돔을 그리지 않고 `React.createElement()`를 통해서 DOM을 만든다.  

<br />

> `React.createElement()` 가 전달 받는 인자
> 
> 1. **첫번째 인자** : 만들려는 DOM 태그   
> 2. **두번째 인자** : class명 같은 속성들 또는 onClick 같은 이벤트를 넣을 수 있다!    
>  (별다른 속성을 넣지 않으려면 null값을 지정)   
> 3. **세번째 인자** : 태그안에 넣을 내용
>
> ex) const p = React.createElement('p', {id: 'text' , style: {color: red}}, "Total Click");
>   
> const btn = React.createElement('button', null, "Click me!");

<br />

- `ReactDOM.render()`는 `React.createElement()`로 만든 리액트 요소를 html형태로 만들어서 배치시켜준다.   
(react-dom CDN이 연결되어 있기 때문에 이런한 방식이 가능하다!)

<br />

> `ReactDOM.render()`가 전달 받는 인자   
>   
> 1. **첫번째 인자** : `React.createElement()`로 만든 리액트 요소(태그)  
> 2. **두번째 인자** : 첫번째 인자를 어디에 위치시킬 건지 지정  
> (body태그안에 위치시켜야 하기 때문에 보통 html에 `<div id="root"></div>`를 작성하고, #root부분에 만든 리액트 요소를 위치시킨다.) 

<br />

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  const root = document.getElementById('root');

  // 첫번째 인자: 만드려는 태그, 두번째 인자 : class명 같은 속성들 (별다른 속성을 넣지 않으려면 null값을 지정) , 세번째 인자: 내용
  const p = React.createElement(
    'p', 
    null,
    "Total Click"
  );
  const btn = React.createElement(
    'button',
    {
      onClick: () => console.log('I have been clicked'),
      style: { backgroundColor: 'tomato' }
    },
    "Click me!"
  );

  // p태그와 btn태그를 화면에 같이 뿌려주기 위해 div태그로 한번 묶어서 사용했다.
  const container = React.createElement(
    'div',
    null,
    [p, btn]
  );

  //  p태그와 btn을 같이 출력될 수 있도록 container로 묶어서 진행
  ReactDOM.render(container, root)
</script>
</html>
```
<br />

![image](https://user-images.githubusercontent.com/81572770/148341231-cc978abd-5aac-4640-bb58-29be2620d117.png)

→  p태그와 btn 태그를 `React.createElement`를 통해 만들고, div.container로 묶어서 한꺼번에 화면에 렌더링 시켰다.

<br />
<br />

→ 사실 리액트 다룰 때, 위의 코드처럼 `React.createElement` 를 활용해서 다루지 않는다.   
  왜냐하면 복잡한 react element들 (ex. `<div><ul><li>리스트</li></ul></div>`)을 만들 때   
  효율성과 가독성이 많이 떨어지기 때문이다.   
  그래서 이러한 방법 보다 JSX를 활용해서 좀 더 편한게 작성할 수 있으니, 여기서는 대략 이러한 개념으로 진행된다고 이해하자!!

<br />
<br />