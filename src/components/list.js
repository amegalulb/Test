import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import Task from './task';

const List = (props) => {
  const {
    todos, toggleTodo, editTodo, deleteTodo,
  } = props;
  return (
    <ul style={{ listStyle: 'none' }}>
      {
        todos.map((todo) => (
          <Task
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo.bind(this)}
            editTodo={editTodo.bind(this)}
            deleteTodo={deleteTodo.bind(this)}
          />
        ))
      }
    </ul>
  );
};

export default List;
