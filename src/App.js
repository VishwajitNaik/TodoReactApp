import React, { useState } from 'react';
import './styles/App.css';
import TodoInput from './components/TodoInput';
import TodoCard from './components/TodoCard';
import ResetButton from './components/ResetButton';

function App() {
  // State to manage TODO items
  const [todos, setTodos] = useState([]);

  // Function to add a new TODO item
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to mark a TODO as complete
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to reset all TODO items
  const resetTodos = () => {
    setTodos([]);
  };

  // Sort active TODOs by creation time (most recent on top)
  const sortedActiveTodos = todos
    .filter((todo) => !todo.completed)
    .sort((a, b) => b.id - a.id);

  // Sort completed TODOs by completion time (most recent on top)
  const sortedCompletedTodos = todos
    .filter((todo) => todo.completed)
    .sort((a, b) => b.id - a.id);

  return (
    <div className="App">
      <h1>TODO App</h1>
      <TodoInput addTodo={addTodo} />
      <div className="todo-list">
        {sortedActiveTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onComplete={completeTodo} />
        ))}
      </div>
      <h2>Completed TODOs</h2>
      <div className="completed-todos">
        {sortedCompletedTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
      {todos.length > 0 && <ResetButton resetTodos={resetTodos} />}
    </div>
  );
}

export default App;
