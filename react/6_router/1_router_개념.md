# [TIL] React_Router란? (version 5)

[React-Router (v6) 사용방법](https://github.com/cookie0215/TIL/blob/main/react/6_router/2_router_v6.md)

## 라우팅이란?
- 웹 어플리케이션에서 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것
  
  과거 멀티 페이지 애플리케이션 시절에는 브라우저가 **페이지를 로딩할 때마다**    
  해당 URL에 대한 각 데이터(파일)들을 서버에게 `요청`하면 서버의 `응답`으로 부터 해당 데이터를 전달 받아왔으나,      
  (URL주소와 관련된 파일만 전달 해줘서 서버 낭비도 심하고, 트래픽도 많이 나오기 때문에 비효율적이였다!)  

  하지만 **SPA(싱글 페이지 애플리케이션)**는 서버로부터 하나의 큰 app(덩어리)을 전달 받는다.   
  그리고 브라우저는 전달 받은 app(덩어리)에서 해당 url주소에 맞게 원하는 파일을 보여줄 수 있도록 결정하게 되었다..!  
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

- react-router v6으로 업데이트된 상태 (2022년 1월 기준, v5버전과 많은 차이가 있음)   

<br />
<br />
<br />

## Router의 종류

### `<BrowserRouter>`
- HTML5의 **history API를 활용**하여 UI를 업데이트하는 `<Router/>`의 종류 중 하나 (가장 일반적으로 많이 사용됨)
- 별도의 서버 설정을 하지 않으면 새로고침 시 404 에러가 발생
- 동적 페이지에 적합

<br />

### `<HashRouter>`
- URL주소에 `#` hash 가 붙는다
- 새로고침 시, 404에러가 발생하지 않음
- 검색 엔진 (SEO)가 읽지 못하기 때문에 거의 사용하지 않는 편 
- 정적인(static)페이지에 적합 (구형브라우저에서 사용)

<br />

### `<MemoryRouter>`
- 브라우저의 주소와 무관
- 일체 건들이지 않음
- 테스트 환경, 임베디드 웹앱, 리액트 네이티브 등에서 사용

<br />

### `<NativeRouter>`
- React Native(스마트폰 애플리케이션) 이용시 사용

<br />

### `<StaticRouter>`
- 서버사이드 렌더링에서 사용하는 용도
- static router의 경우 V6부터 import 경로가 변경됨
    ```jsx
    // v5
    import { StaticRouter } from 'react-router-dom';
    
    // v6
    import { StaticRouter } from 'react-router-dom/server';
    ```

<br />
<br />

## React Router 관련 컴포넌트

### `<Link>`

> 형태    
>    
> `<Link to="경로" />`     
> `<Link to="경로">링크 이름</Link>`

<br />

- 클릭 시, 다른 주소로 이동시키는 컴포넌트 

- **History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장된 Link 컴포넌트를 사용**해야 한다!  

  → a태그를 사용하지 않는 이유)       
    `<a hre='#'>`는 페이지를 이동할 때 브라우저에서 페이지를 새로 불러온다(리렌더링 발생)    
    하지만, `<Link />`는 단순히 브라우저 주소 (url)만 변경 시키기 때문에    
    React-Router에서 `<Link />`를 사용한다! 

<br />
<br />

### `<Route>`
- url에 해당하는 컴포넌트(요청받은 pathname에 해당하는 컴포넌트)를 렌더링 해주는 것    
  → 즉, 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주기 위해서 Route 라는 컴포넌트를 통해 라우트 설정을 해야 한다.

- V5에서는 `<Route></Route>`안에 자식 컴포넌트를 넣어서 사용하거나   
  `component={컴포넌트명}` 이렇게 component라는 속성을 사용했다.   

  💛하지만 V6이후부터는 `element={<컴포넌트명 />}` 이렇게 element 속성을 활용함!!

<br />
<br />

### `<Routes>`
- 여러개의 `<Routes>`컴포넌트를 한번에 렌더링하기 위해 `<Routes>`로 감싸서 활용
- V5에서는 `<Switch>` 컴포넌트를 사용했으나, V6이후부터 `<Routes>` 컴포넌트를 사용

<br />
<br />
<br />

## React Router Dom 관련 Hooks

> URL 파라미터와 쿼리    
>
> : 페이지 주소(url)를 정의할 때 유동적인 값을 전달해야 하는 경우가 있다.      
>  → 특정id 또는 이름을 사용해서 조회할때 **파라미터**를 사용하고    
>  어떤 키워드 검색 또는 페이지에 필요한 옵션을 전달할 때는 **쿼리**를 사용한다. 

<br />

### `useParams()`
- V5에서 component가 렌더링될 때는 props를 통해서 데이터를 전달할 수 있지만,    
Routing한 component는 props가 갖고 있는 값(history, location, match)들을 이용해서 데이터를 주고 받을 수 있었다.    

  → 하지만 v6 부터는 `import { useParams } from 'react-router-dom';` 이렇게 useParams() 라는 Hook을 사용해 더욱 간결하게 parmas값을 받을 수 있다. 

- <Route> 컴포넌트에 path속성에서 URL을 파라미터로써 값을 받는 객체를 useParams()를 통해 접근함

-  파라미터 개수는 여러개여도 상관없으며, 원하는 이름으로 작성해도 된다.    
  ex) <Route path="/:id/:abc/:country" />

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

    → App.js에서 react-router한테 해당 url이 `:id` 라는 변수를 받을 거라고 알려준다.     
    그리고나서 Profile 컴포넌트에서 `useParams()`함수를 사용해 전달할 해당 변수 값을 넘겨주면 된다.

<br />
<br />

### `useLocation()`
- V5에선 props로 전달된 값에 location이 있어서 그것을 통해 location.search값을 읽어올 수 있었다.     
그리고 쿼리문을 객체형태(key-value)로 변환하기 위해 query-string 라이브러리를 사용해야 했다.    

  → 하지만 V6버전부터 `import { useLocation } from 'react-router-dom';` 이렇게 useLocation Hook을 가져와서 쿼리스트링을 작성할 수 있다.  

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