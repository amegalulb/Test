import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Task = (props) => (
  <li
    key={props.todo.id}
    index={props.todo.id}
    className="todo-item"
  >
    <Checkbox
      checked={props.todo.checked}
      color="secondary"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
      onClick={props.toggleTodo.bind(this, props.todo.id, props.todo.text, props.todo.checked)}
    />
    <span
      className="todo-text"
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          props.editTodo(props.todo.id, props.todo.checked, e);
        }
      }}
      role="textbox"
      tabIndex="-1"
      contentEditable="true"
      suppressContentEditableWarning="true"
    >
      {props.todo.text}
    </span>
    <button
      className="delete"
      onClick={props.deleteTodo.bind(this, props.todo.id)}
      type="button"
    >
      <span />
      <span />
    </button>
  </li>
);

export default Task;
