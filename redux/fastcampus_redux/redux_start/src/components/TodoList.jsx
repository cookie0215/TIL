

export default function TodoList({ todos }) {
  return <ul>{todos.map(
    (todo) => <li>{todo.text}</li>)
  }</ul>;
}

