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

### 2. import로 연결

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

[4. Event Handling](https://github.com/cookie0215/TIL/blob/main/react/4_eventHandling/event.md)   
[5. Lifecycle](https://github.com/cookie0215/TIL/blob/main/react/5_lifecycle/lifecycle.md)    
[6. Router(v6)](https://github.com/cookie0215/TIL/blob/main/react/6_router/router.md)   
[7. ]()   
8. Hook  
  - [8-1) useState](https://github.com/cookie0215/TIL/blob/main/react/3_props_state/state.md)   
  - [8-2) useEffect](https://github.com/cookie0215/TIL/blob/main/react/8_hooks/useEffect.md)   
  - [8-3) customHook](https://github.com/cookie0215/TIL/blob/main/react/8_hooks/customHook.md)   
  - [8-4) additionalHook](https://github.com/cookie0215/TIL/blob/main/react/8_hooks/additionalHook.md)   

[9. context]()   

