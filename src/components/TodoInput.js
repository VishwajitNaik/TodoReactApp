import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && todoText.trim() !== '') {
      // Call the addTodo function from the parent component
      addTodo(todoText);
      setTodoText(''); // Clear the input field
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add a new TODO..."
        value={todoText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="add-button"
        onClick={() => {
          if (todoText.trim() !== '') {
            addTodo(todoText);
            setTodoText('');
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
