import React from 'react';

const ResetButton = ({ resetTodos }) => {
  const handleResetClick = () => {
    // Call the resetTodos function from the parent component
    resetTodos();
  };

  return (
    <div className="reset-button">
      <button onClick={handleResetClick}>Reset All</button>
    </div>
  );
};

export default ResetButton;
