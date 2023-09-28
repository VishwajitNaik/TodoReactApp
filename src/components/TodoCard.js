import React from 'react';

const TodoCard = ({ todo, onComplete }) => {
  const handleCompleteClick = () => {
    onComplete(todo.id);
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-text">{todo.text}</div>
      <button className="complete-button" onClick={handleCompleteClick}>
        Complete
      </button>
    </div>
  );
};

export default TodoCard;
