# [TIL] React_Event Handling


### Event Handling
- React의 이벤트는 on을 붙이고, 카멜 케이스형태로 사용한다.
  ex) onClick , onSubmit , onMouseEnter
- JSX를 사용해서 문자열이 아닌 **함수**로 이벤트 핸들러를 전달한다.
  → `이벤트={함수}` 형태로 작성
- 실제 DOM요소들에만 사용할 수 있다.
  (리액트 컴포넌트에 사용하면, 그냥 props로 전달한다.)