import { createStore } from 'redux';

const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');

/* action정의 */
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

/* action 생성자 */
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}


const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // 기존 상태에서 새 상태를 추가반환하는 형식 (기존의 상태를 변경시키지 않는다!)
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}
const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text))
}

const dispatchDeleteTodo = (e) => {
  // e.target은 button을 의미하고 e.target.parentNode는 button의 부모요소인 li를 가리킨다. li가 갖고 있는 각 고유의 id를 지정해놨기 때문에
  // li의 id값을 찾을 수 있다.
  // id값은 숫자인데 e.target.parentNode.id 문자열로 출력되기 때문에 숫자형으로 바꿔줘야 한다.
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id))
}

const paintTodos = () => {
  // store가 변경될 때마다 li에 담았던 모든 것들을 repainting시키는 문제 발생
  const toDos = store.getState();

  // forEach에서 paint 해주기 전, 이미 paint 된 ul안의 li들을 없애주도록 한다.
  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.id = toDo.id;
    li.innerText = toDo.text;

    deleteBtn.innerText = 'DEL';

    deleteBtn.addEventListener('click', dispatchDeleteTodo);

    ul.appendChild(li);
    li.appendChild(deleteBtn);
  });
}
store.subscribe(paintTodos)


const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  dispatchAddTodo(toDo);
}



form.addEventListener('submit', onSubmit)