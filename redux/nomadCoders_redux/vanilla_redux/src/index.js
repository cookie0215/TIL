import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

const reducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}
const store = createStore(reducer);


const handleAdd = () => {
  store.dispatch({ type: ADD });
}
const handleMinus = () => {
  store.dispatch({ type: MINUS });
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)

const onchange = () => {
  // store 상태가 변경될 때마다 값이 <span>에 나타남
  number.innerText = store.getState();
}
console.log(store.subscribe(onchange));