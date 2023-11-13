// 액션 정의
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// 액션 생성자(액션 생성 함수)
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

// 할일을 done(처리했는지) 상태를 확인하기 위해 액션을 만듬
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  }
}

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}