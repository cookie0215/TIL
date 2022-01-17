# [TIL] React_Portal

<br />

## Portal

- 컴포넌트를 랜더링 시킬 때 랜더링 시킬 DOM을 선택하여 부모 컴포넌트의 바깥에서도 렌더링 할 수 있게 해주는 기능
- 외부에 존재하는 DOM 노드가 마치 React App DOM 계층 안에 존재하는 것처럼 연결을 해주는 포탈 기능을 제공
- 주로 Modal'이나 'Popup'창 만들 때 사용

<br />

### Portal 사용 이유
react의 기본 흐름구조는 tree형태이기 때문에, 부모 컴포넌트가 렌더링되면 자식 컴포넌트가 렌더링되는 특징을 갖고 있다.    
→ 하지만 가끔 이런 tree구조가 불편함을 발생시키는데,    
portal을 사용하면 react tree구조에 부모를 하나 더 만등ㄹ어서 서로 독립적인 흐름을 제어할 수 있도록 만들 수 있다.

<br />

> < 형태 >   
>
> ReactDOM.createPortal(child, container)

- `createPortal`의 첫번째 인자 : 렌더링이 가능한 react의 하위요소를 의미
- `createPortal`의 두번째 인자 : DOM 요소

<br />
<br />
<br />

## Portal 사용 방법

1. public/index.html에 root 밑에 자신이 추가하고 싶은 컴포넌트를 랜더링할 장소를 지정  

    ```html
    <!-- public/index.html -->

      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"></div>
        <div id="modal"></div>
      </body>
    ```

<br />

2. 

<br />
<br />
<br />