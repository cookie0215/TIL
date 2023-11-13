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

2. 모달영역을 사용하기 위해 Modal 컴포넌트를 만든다.     
  → 이 컴포넌트를 사용하면 원하는 JSX 를 id="modal" 을 가진 DOM 엘리먼트에 렌더링할 수 있음

    ```javascript
    // Modal.js
    import ReactDOM from "react-dom";

    const Modal = ({ children }) => {
      const el = document.getElementById('modal')
      return ReactDOM.createPortal({children}, el)
    }

    export default Modal;
    ```

<br />

3. 모달창에 보여줄 내용과 style을 작성하기 위해 MyModal.jsx 파일과 MyModal.css 파일을 만든다.

    ```jsx
    // MyModal.jsx 
    import React from 'react';
    import './MyModal.css';

    const MyModal = () => {
      return (
        <div className="MyModal">
          <div className="content">
            <h3>이것은 모달</h3>
            <p>궁시렁 궁시렁 내용입니다.</p>
            <button>닫기</button>
          </div>
        </div>
      );
    };

    export default MyModal;
    ```

<br />

4. 만든 MyModal.jsx파일을 App.js파일에 연결해준다.    
  이때 portal로 사용할 Modal.js로 감싸서 코드를 작성해준다!

    ```jsx
      // App.js

      import React from 'react';
      import MyModal from './MyModal';
      import ModalPortal from './Modal';
      import './App.css';

      const App = () => {
        render() {
          return (
            <div className="App">
              <h1>모달창 만들기!</h1>
              <Modal>
                <MyModal />
              </Modal>
            </div>
          );
        }
      }

      export default App;
    ```

<br />
<br />