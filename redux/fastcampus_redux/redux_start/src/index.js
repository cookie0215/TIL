import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

// import { addTodo, completeTodo, showComplete } from './redux/actions';

// store의 변경 상황이 생기는 것을 파악한다 (store상태가 변경되면 함수호출됨)
// store.subscribe(() => {
//   // getState() : store가 현재 어떤 상태를 갖고 있는지 파악할 수 있음
//   console.log(store.getState())
// });

// // store의 상태를 변경시키기
// // dispatch의 인자로 action을 사용할 때 액션 생성자함수를 불러온다!
// store.dispatch(addTodo('coding'));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
