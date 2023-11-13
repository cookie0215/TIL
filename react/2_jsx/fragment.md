# [TIL] React_Fragment
- Fragment는 React v16에 추가된 기능
- 컴포넌트가 여러 엘리먼트를 return 할때 jsx규칙상 하나의 태그로 묶어서 return 해줘야 한다.   
  이때 fragment를 사용하면 **dom에 별도의 노드를 추가하지 않고 여러자식을 그룹화 할 수 있다.**
- DOM요소를 감쌀 때 불필요하게 `<div>`를 만들지 않기 때문에 코드 작성 시, 유용하다.

<br />
<br />

## Fragment 형태

> `<React.Fragment></React.Fragment>`
> 또는 
> `<></>`

<br />

- `<></>` 빈태그 형태로 작성할 수 있지만,   
속성 또는 key를 별도로 추가할 수 없고, 아직 지원하지 않는 도구들이 있기 때문에 되도록   
`<React.Fragment></React.Fragment>`으로 작성하는 것이 좋다.

<br />

***[연습] ul안에 li태그 컴포넌트로 만들어서 넣기***
```html
<body>
  <div id="root"></div>
</body>
<script type="text/babel">
const Lists = () => {
  return (
    <ul>
      <ListItem />
    </ul>
  );
}

const ListItem = () => {
  return (
    <React.Fragment>
      <li>목록1</li>
      <li>목록2</li>
    </React.Fragment>
  );
}

  // 사용 방법
ReactDOM.render(
  <Lists />,
  document.getElementById('root')
)
</script>
```
![image](https://user-images.githubusercontent.com/81572770/148407244-85ae8614-b1fe-4dd3-98be-972c3cd5f58f.png)

→ li태그만 모아놓은 컴포넌트(ListItem)로 만들어서 ul 컴포넌트(Lists)에 넣은 형태이다.   
  이때, ListItem 컴포넌트의 li태그는 jsx 규칙에 의해 최상위 요소를 1개만 있을 수 있기 때문에  
  li태그 2개를 넣어놓으면 에러가 발생한다.  

  여기서 div태그로 li태그들을 묶어서 마치 최상위 요소가 1개인것처럼 만든다면 아래처럼 코드가 작성될 것이다.     
  
  ```html
  <ul>
    <div>
      <li></li>
      <li></li>
    </div>
  </ul>
  ```

  <br /> 

  이렇게 작성되면 마크업이 올바르지 않은 형태가 되고, 또 이렇게 2개이상의 요소들을 묶어서 사용할 때 div태그를 남발할 수 있게 되기 때문에  
  `<React.Fragment></React.Fragment>` Fragment를 사용해서 묶어주는 것이다!  

  ⇒ 즉, JSX 특성상 반드시 최상위 요소는 1개만 존재해야 하는데, 최상위 요소를 2개 이상으로 작성하고 싶을 때    
  Fragment를 활용해서 최상위 요소들을 묶어주는 것이다!