# [TIL] React_Router

<br />

### 라우팅이란?
- 웹 어플리케이션에서 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것
  
  과거 멀티 페이지 애플리케이션시절에는 브라우저가 **페이지를 로딩할 때마다**    
  해당 URL에 대한 각 데이터(파일)들을 서버에게 `요청`하면 서버의 `응답`으로 부터 해당 데이터를 전달 받아왔으나,      
  (URL주소와 관련된 파일만 전달 해줘서 서버 낭비도 심하고, 트래픽도 많이 나오기 때문에 비효율적이였다!)  

  하지만 **SPA(싱글 페이지 애플리케이션)**는 서버로부터 하나의 큰 app(덩어리)을 전달 받는다.   
  그리고 브라우저는 전달 받은 app(덩어리)에서 해당 url주소에 맞게 원하는 파일을 보여줄 지 결정하게 되었다..!  
⇒ 즉, SPA는 전체 파일을 받아온 후, 그 url경로에 맞게 브라우저가 원하는 것만 업데이트해서 보여줄 수 있게 되었다!   

*(html은 한번만 받아와서 웹 애플리케이션을 실행시킨 후에 그 이후에는 필요한 데이터만 받아와서 화면에 업데이트 해주는 것이 싱글 페이지 애플리케이션이다!)*

<br />

SPA 라우팅 작업을 처리하려면 라우팅 관련 시스템을 사용해야 한다.
대표적으로 React Router 와 Next.js가 있다!

<br />
<br />

## React Router란?
- `react-router` 는 가장 대표적인 라우팅 패키지로,    
  **react 에서 브라우저 라우팅을 관리하기 위해 사용하는 라이브러리이다!**    
  (react 를 통한 작업 시 거의 같이 쓰는 라이브러리)   
- Create React App에 기본 내장된 패키지가 아니기 때문에 `npm i react-router-dom` 을 입력해서 별도로 설치해줘야 한다!
- React는 Facebook꺼지만... `react-router-dom` 은 Facebook의 공식 패키지가 아니다!

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
  : React-Router를 사용하는 프로젝트는 링크 이동할 때 필요한 a태그를 바로 사용할 수 없고,   
  **History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장된 Link 컴포넌트를 사용**해야 한다!  

    *(a태그는 해당 링크를 클릭 시, 페이지를 이동할 때 브라우저에서 페이지를 새로 불러오기 때문이다!)*

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
<br />

## URL 파라미터와 쿼리
- 페이지 주소(url)를 정의할 때 유동적인 값을 전달해야 하는 경우가 있다.   
  → 특정아이디 또는 이름을 사용해서 조회할때 **파라미터**를 사용하고   
  어떤 키워드 검색 또는 페이지에 필요한 옵션을 전달할 때는 **쿼리**를 사용한다. 

<br />

### URL 파라미터 : useParams()
component가 렌더링될 때는 props를 통해서 데이터를 전달할 수 있지만,    
Routing한 component는 props가 갖고 있는 값(history, location, match)들을 이용해서 데이터를 주고 받을 수 있었다.

→ 하지만 v6 부터는 `import { useParams } from 'react-router-dom';` 이렇게 useParams() 라는 Hook을 사용해 더욱 간결하게 parmas값을 받을 수 있다.    

<br />

```jsx
// src/pages/Profile.jsx 파일
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  return <div> Profile 페이지{id} 입니다.</div>
}
```
```javascript
// App.js
<Route path="/profile/:id" element={<Profile />}></Route>
```
![image](https://user-images.githubusercontent.com/81572770/148755309-95664828-1340-46a9-b403-97d59e428dfa.png)

<br />

→ 만약 URL파라미터가 여러개인 경우 `/profile/:id/:username` 이렇게 작성할 수 있다.

<br />
<br />

### URL 쿼리 : useLocation
예전에는 props로 전달된 값에 location이 있어서 그것을 통해 location.search값을 읽어올 수 있었다. 그리고 쿼리문을 객체형태(key-value)로 변환하기 위해 query-string라이브러리를 사용해야 했다.

하지만 v6버전부터 `import { useLocation } from 'react-router-dom';` 이렇게 useLocation Hook을 가져와서 쿼리스트링을 작성할 수 있다.  

<br />

> useLocation Hook   
>   
> - 현재 사용자가 보고있는 페이지의 정보를 갖고 있다.
> - location 객체를 반환하고 아래와 같은 값들이 있다.   
>   - **pathname**: 현재 주소의 경로 (쿼리스트링 제외)  
>   - **search**: 맨 앞의 ? 문자 포함한 쿼리스트링 값   
>   - **hash**: 주소의 # 문자열 뒤의 값   
>         (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용합니다.) 
>   
>   - **state**: 페이지로 이동할때 임의로 넣을 수 있는 상태 값   
>   - **key**: location 객체의 고유 값, 초기에는 default 이며 페이지가 변경될때마다 고유의 값이 생성됨

<br />

```jsx
// src/pages/About.jsx 파일

import { useLocation } from 'react-router-dom';

export default function About() {
  const { search } = useLocation();
  const detail = search === '?detail=true';
  console.log(search);
  console.log(detail);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {detail && <p>해당 경로로 들어오면 보이는 텍스트입니다</p>}
    </div>
  );
}
```

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
