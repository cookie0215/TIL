# [TIL] React-Redux
redux는 Javascript application들의 **state(상태)를 관리할 수 있도록 도와주는 용도인데,   
react에서 redux를 사용하려면 redux를 설치한 뒤, 별도로 react-redux를 설치해줘야 한다!!

<br />

## React-Redux란?
- react내에서 redux를 사용하기 위해 만들어진 라이브러리    
  (react와 redux를 연결해주는 라이브러리)

<br />
<br />

## React-Redux 관련 개념들

### `Provider`
- Provider 컴포넌트로 React 컴포넌트 (ex.App.js)를 감싸줌으로써    
  하위 컴포넌트들이 Provider를 통해 Redux의 store에 access(접근)할 수 있도록 만든다.
- context에서 Provider를 사용할 때 value 속성을 전달 하듯이, store를 속성으로 작성해야 한다.   
  ex) `<Provider store={store}><컴포넌트 /></Provider>`

<br />
<br />

### `connect()()`
- state가 저장되어 있는 **store를 컴포넌트들에 연결(connect)**해서 사용할 때 쓰는 메소드

- 2개의 인자로 구성되어 있다.
  - 첫번째 인자 **mapStateToProps**   
    : store로부터 state를 가져와서 컴포넌트의 props로 state를 보내주는 역할
  
  - 두번째 인자 **mapDispatchToProps**
  : action을 reducer 함수에게 전달하는 기능을 가진 **dispatch를 props로 보내는 역할**

<br />
<br />

### `mapStateToProps`
- connect의 첫번째 인자로 들어가며, mapStateToProps도 2개의 인자를 가진다.
  - 첫번째 인자 state : store로부터 온 state     
` - 두번째 인자 ownProps : 컴포넌트가 현재 가지고 있는 모든 props를 보여줌 (생략 가능)

<br />
<br />

### `mapDispatchToProps`
- connect의 두번째 인자로 들어가며, mapDispatchToProps도 2개의 인자를 전달 받는다. 


<br />

### `connect()()` 형태   

```javascript
// 현재 state를 전달 받을 컴포넌트 파일에 작성!

function mapStateToProps(state, ownProps){} 
function mapDispatchToProps(dispatch, ownProps){} 

connect(mapStateToProps, mapDispatchToProps)(컴포넌트이름);
```

- 만약 mapStateToProps를 사용하지 않고 mapDispatchToProps 인자만 사용하고 싶다면    
`connect(null, mapDispatchToProps)(컴포넌트이름);` 이렇게 작성한다!!

- mapStateToProps와 mapDispatchToProps 인자는 함수형태로 만들어서 넣는다!

<br />