import { useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../redux/actions';

const TodoFormContainer = () => {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text))
    },
    [dispatch]
  )

  return <TodoForm add={add} />
}

export default TodoFormContainer;