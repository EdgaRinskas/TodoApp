import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Add new todo"
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>

      <p>Total Todos: {todos.length}</p>
    </div>
  );
}

export default App;
