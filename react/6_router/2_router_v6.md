# [TIL] React_Router (version 6)

[React-Router 개념](https://github.com/cookie0215/TIL/blob/main/react/6_router/1_router_개념.md)

<br />

## React Router V5 → V6로 변경된 내용들

### exact 옵션 삭제


<br />
<br />

## React Router 사용 방법

1. `npx create-react-app 폴더명` 으로 프로젝트 생성 후,    
  `npm i react-router-dom` 으로  react-router-dom 라이브러리를 설치한다.

<br />

2. 프로젝트에 react-router를 적용하기 위해 src/index.js파일에 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싼다.
  (패캠 강사님은 App.js에 BrowserRouter컴포넌트를 작성했는데, 이것도 가능한 듯 하다!)   
  
    ```javascript
      // index.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import App from './App';
      import { BrowserRouter } from 'react-router-dom';

      // react의 main
      ReactDOM.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        document.getElementById('root')
      );
    ```

<br />

3. src폴더에 pages폴더를 생성 후, 그 안에 각 컴포넌트 파일들을 만든다.  
  (꼭 pages폴더를 만들어서 그 안에 자식 컴포넌트를 넣어줄 필요는 없다.  
  단순히 컴포넌트들을 다른 파일들과 구분하기 위해 사용한 방법일 뿐이다!)

    ```jsx
      // src/pages/Home.jsx 파일

      export default function Home() {
        return <div>Home 페이지 입니다.</div>
      }
    ```
    ```jsx
      // src/pages/Profile.jsx 파일
      export default function Profile() {
        return <div>Home 페이지 입니다.</div>
      }
    ```
    ```jsx
      // src/pages/About.jsx 파일
      export default function Profile() {
        return <div>Home 페이지 입니다.</div>
      }
    ```

<br />

4. App.js에 `import { Route, Routes } from 'react-router-dom';` 작성   
  : react-router-dom 라이브러리에서 Route, Routes를 불러온다.

5. App.js에 `<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />` 이렇게 작성한다.   

    - 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주기 위해서 Route 라는 컴포넌트를 통해 라우트 설정을 해야 한다.
    - 단, `<Routes></Routes>`안에 Route 컴포넌트들이 감싸져 있어야 한다!  

    ```javascript
      // App.js
      
      import { Route, Routes } from 'react-router-dom';
      import Home from './pages/Home.jsx';
      import Profile from './pages/Profile.jsx';
      import About from './pages/About.jsx';

      function App() {
        return (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        );
      }
    ```

<br />

6. `npm start` 명령어 입력 → `http://localhost:3000/` 개발서버를 연다.  

7. 각 컴포넌트에 `<Link to="경로">링크 이름</Link>` 를 통해 다른 페이지로 이동하는 링크 보여준다.   

    ```jsx
     // src/pages/Home.jsx 파일

      import { Link } from "react-router-dom";

      export default function Home() {
        return (
          <div>
            <div> Home 페이지 입니다.</div >
            <Link to="/about">about 페이지 이동</Link>
          </div>
        )
      }
    ```
    → `import { Link } from "react-router-dom";` 으로 내장된 Link를 가져온 뒤,  
    `<Link to="경로">링크 이름</Link>` 다른 페이지로 이동할 수 있게 해당 링크를 작성해준다.

    <br />

    Home.jsx                |      About.jsx
    |:---------------------:|:---------------------------------:|
    ![image](https://user-images.githubusercontent.com/81572770/148732752-15280383-57a8-438c-9eb8-c6c4867f9f8c.png) | ![image](https://user-images.githubusercontent.com/81572770/148732806-7d5b1e0a-3e20-4d32-abf2-f672f9b577a1.png)
   
<br />
<br />

## 존재하지 않는 페이지 만들기
1. 위에서 다른 컴포넌트를 생성하듯이 `[src] - [pages] - NotFound.jsx` 파일을 생성한다.

    ```jsx
      // src/pages/NotFound.jsx 파일

      export default function NotFound() {
        return <div> 현재 페이지를 찾을 수 없습니다.</div>
      }
    ```

2. App.js에 만든 NotFound.jsx페이지를 불러온다.
  
    ```jsx
      // App.js

      import { BrowserRouter, Route, Routes } from 'react-router-dom';
      import Home from './pages/Home.jsx';
      import Profile from './pages/Profile.jsx';
      import About from './pages/About.jsx';
      import NotFound from './pages/NotFound.jsx';

      function App() {
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile/:id" element={<Profile />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        );
      }

      export default App;
    ```

3. 현재 만든 컴포넌트 중 `/` , `/profile` , `/about` 이 아닌 다른 경로를 입력하면 아래 이미지처럼 페이지가 나타나는 것을 볼 수 있다!
  ![image](https://user-images.githubusercontent.com/81572770/148764755-20c24efd-6929-4c4f-8b13-fc0ab3354291.png)

<br />
<br />

## NavLink 스타일 변경
위에서 `import { Link } from "react-router-dom";` 를 통해 a태그 대신 리액트라우터에서 다른 페이지로 이동할 수 있도록 만들었다.

그런데 링크에 특정 스타일 혹은 클래스를 적용하려면 **NavLink 컴포넌트**를 활용해야 한다. 

하지만 v5버전까지는 특정 스타일, 클래스를 적용해주던 activeStyle, activeClassName 속성이 존재했는데,    
v6버전이후부터는 activeStyle, activeClassName 속성 대신 **{ isActive: boolean } 을 파라미터로 전달받는 함수 타입의 값으로 전달해야 한다!**

<br />

```jsx
import { NavLink } from "react-router-dom"

export default function NavLinks() {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
          className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
        >
          home 페이지로 이동
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          about 페이지로 이동
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          profile 페이지로 이동
        </NavLink>
      </li>
    </ul >
  )
}
```
→ `style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}` 이렇게 삼항연산자 형태로   
해당 페이지가 활성화된 상태(현재 그 페이지에 있는 상태)라면 해당 링크가 빨간색으로    
현재 그 페이지에 벗어난 상태라면 링크가 검정색으로 되게 만들 수 있다.

<br />

NavLink태그 안에 직접 코드를 작성해서 넣을 수도 있고 아니면 스타일 객체 데이터를 변수에 담아     
`style={({ isActive }) => (isActive ? activeStyle : undefined)}` 이렇게 처리할 수도 있다.  

<br />
<br />

##  useNavigate
v5버전에선 props에서 제공되는 useHistory객체를 사용할 수 있었는데   
이제 `import { useNavigate } from 'react-router-dom';` 으로 교체해서 사용하게 되었다.

<br />

***[예제] 로그인 버튼 클릭 후 1초 뒤, home화면으로 이동***

```jsx
// src/components/Login.jsx 파일

import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function login() {
    setTimeout(() => {
      // 로그인 페이지에서 홈화면으로 이동
      navigate('/');
    }, 1000)
  }

  return (
    <div>
      <h2>로그인페이지 입니다.</h2>
      <button onClick={login}>로그인</button>
    </div>
  )
}
```
<br />

***[예제] 현재 페이지에서 뒤로가기 클릭 시, 이전 페이지로 이동***

```jsx
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    // 현재 페이지에서 바로 이전 페이지로 이동
    navigate(-1);
  }

  const goAbout = () => {
    // about페이지로 이동
    navigate('/about');
  }
  return (<div>
    <h2>Profile 페이지{id} 입니다.</h2>
    <button onClick={goBack}>뒤로가기</button>
    <button onClick={goAbout}>About페이지로</button>
  </div>)
}
```
<br />

→ 바로 이전페이지로 이동하고 싶을 땐 `navigate(-1);` 설정해준다.
그리고 페이지 이동 시, 페이지 기록을 남기고 싶지 않을 땐 **replace** 옵션을 사용해주면 된다!   

ex) `navigate('/about', { replace: true });`   
`replace: true`가 설정되어 있는 상태에서,    
현재 페이지 Profile이고 바로 이전 페이지가 About페이지였을 때,   
Profile에서 뒤로가기 버튼을 클릭해도 About페이지로 이동하지 않고 더 이전인 Home화면으로 이동하게 된다!

즉, `replace: true`설정으로 인해 About 페이지로 접속했던 기록이 남지 않았기 때문에 더 이전인 home페이지로 이동하는 것이다!

<br />
<br />
<br />

*출처)*
*[react-router v6에서는 어떤것들이 변했을까??](https://blog.woolta.com/categories/1/posts/211)*

<br />
<br />


