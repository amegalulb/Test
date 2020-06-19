import React from 'react';
import * as axios from 'axios';
import Button from '@material-ui/core/Button';
import List from '../components/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoText: '',
    };
  }

  componentDidMount() {
    this.refreshTodos();
  }

  addTodo() {
    const { todos, newTodoText } = this.state;
    const newTodosArr = [...todos];
    newTodosArr.push({
      id: 0,
      text: newTodoText,
      checked: false,
    });
    const lastTodo = newTodosArr[newTodosArr.length - 1];
    axios.post(process.env.API__ADDRESS, lastTodo).then(() => {
      this.refreshTodos();
    });
  }

  deleteTodo(id) {
    axios.delete(`${process.env.API__ADDRESS}/${id}`)
      .then(() => {
        this.refreshTodos();
      });
  }

  toggleTodo(id, text, checked) {
    axios.put(`${process.env.API__ADDRESS}/${id}`, {
      id,
      text,
      checked: !checked,
    }).then(() => {
      this.refreshTodos();
    });
  }

  editTodo(id, checked, e) {
    const newTodoText = e.target.closest('.todo-text').textContent;
    axios.put(`${process.env.API__ADDRESS}/${id}`, {
      id,
      text: newTodoText,
      checked,
    }).then(() => {
      this.refreshTodos();
    });
  }

  refreshTodos() {
    axios.get(process.env.API__ADDRESS).then((res) => {
      this.setState({
        todos: res.data,
        newTodoText: '',
      });
    });
  }

  render() {
    const { newTodoText, todos } = this.state;
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.addTodo();
          }}
        >
          <fieldset>
            <legend
              className="todo-form__label"
              htmlFor="todoInput"
            >
              Task:
            </legend>
            <input
              name="todo"
              id="todoInput"
              className="TodoForm-input"
              value={newTodoText}
              onChange={(e) => {
                this.setState({ newTodoText: e.target.value });
              }}
            />
          </fieldset>
          <Button
            variant="outlined"
            id="green-btn"
            type="submit"
          >
            ADD
          </Button>
        </form>
        <List
          todos={todos}
          toggleTodo={this.toggleTodo.bind(this)}
          editTodo={this.editTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
