import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../routes/store";

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  }
}
export default connect(null, mapDispatchToProps)(ToDo);