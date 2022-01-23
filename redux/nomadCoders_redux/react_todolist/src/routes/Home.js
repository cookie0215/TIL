import React, { useState } from "react";
import { connect } from 'react-redux';
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ toDos, addTodo }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    return setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    addTodo(text);
  }
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo  {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return { toDos: state }
}
const mapDispatchToProps = (dispatch) => {
  return { addTodo: (text) => dispatch(actionCreators.addTodo(text)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);