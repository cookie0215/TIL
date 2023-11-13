# [TIL] React 공부 내용 정리 및 복습
패스트 캠퍼스, 노마드 코더 등 리액트 강의를 수강 후, 정리한 내용입니다.

<br />

## react 연결하기
React를 연결할 때 핵심 모듈이 되는 것이 2가지가 있다.  
바로 React 컴포넌트를 만들기 위해 필요한 `react` 모듈과   
만든 리액트 컴포넌트를 Html element에 연결 시켜주는 `react-dom` 이 존재한다.   

<br />

### 1. CDN 연결하기

```html
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

<br />

### 2. npm에서 CRA 설치 후 import로 연결  

2-1. 터미널에 `npx create-react-app 생성할폴더명` 입력해서 CRA설치   

2-2. `cd 폴더명` : 만든 폴더명으로 이동   

2-3. `npm start`   
: react를 사용할 수 있도록 기본 세팅된 프로젝트가 설치된다.

2-4. 설치한 프로젝트폴더에 index.js 아래 코드들이 import되어 있는 것을 확인할 수 있다!

```javascript
import ReactDOM from 'react-dom'; 
import React from 'react'; 
```

<br />
<br />

# React 목차 정리

<br />

[0. 리액트 시작하기 전 & React.createElement()](https://github.com/cookie0215/TIL/blob/main/react/0_js_react/react%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%20%EC%A0%84.md)  
[1. React Component](https://github.com/cookie0215/TIL/blob/main/react/1_reactComponent/react_component.md)    

[2-1. JSX](https://github.com/cookie0215/TIL/blob/main/react/2_jsx/jsx.md)  
[2-2. Fragment](https://github.com/cookie0215/TIL/blob/main/react/2_jsx/fragment.md)  

[3-1. Props](https://github.com/cookie0215/TIL/blob/main/react/3_props_state/props.md)  
[3-2. State](https://github.com/cookie0215/TIL/blob/main/react/3_props_state/state.md)   
[3-3. Lifting State Up](https://github.com/cookie0215/TIL/blob/main/react/3_props_state/lifting_state_up.md)   

[4. Event Handling](https://github.com/cookie0215/TIL/blob/main/react/4_eventHandling/event.md)   
[5. Lifecycle](https://github.com/cookie0215/TIL/blob/main/react/5_lifecycle/lifecycle.md)    
6. React-Router
  - [6-1) React-Router 개념](https://github.com/cookie0215/TIL/blob/main/react/6_router/1_router_개념.md)    
  - [6-2) React-Router (v6)](https://github.com/cookie0215/TIL/blob/main/react/6_router/2_router_v6.md)    
       
7. React 스타일     
  - [7-1) 기본 CSS & CSS Module](https://github.com/cookie0215/TIL/blob/main/react/7_style/react_style.md)     
  - [7-2-1) Styled Components](https://github.com/cookie0215/TIL/blob/main/react/7_style/styled_components1.md)         
  - [7-2-2) Styled Components : reset & theme](https://github.com/cookie0215/TIL/blob/main/react/7_style/styled_components2.md)         
  - [7-3) Emotion](https://github.com/cookie0215/TIL/blob/main/react/7_style/emotion.md)         

8. Hook  
  - [8-1) useState](https://github.com/cookie0215/TIL/blob/main/react/3_props_state/state.md)   
  - [8-2) useEffect](https://github.com/cookie0215/TIL/blob/main/react/8_hooks/useEffect.md)   
  - [8-3) customHook](https://github.com/cookie0215/TIL/blob/main/react/8_hooks/customHook.md)   
  - [8-4) additionalHook](https://github.com/cookie0215/TIL/blob/main/react/8_hooks/additionalHook.md)     

<br />

[9. context](https://github.com/cookie0215/TIL/blob/main/react/9_component/context.md)    
10. jest   
11. shadowDOM    

[12. controlled와 uncontrolled](https://github.com/cookie0215/TIL/blob/main/react/12_controlled_uncontrolled/controlled_uncontrolled.md)   

[13. ]()   

