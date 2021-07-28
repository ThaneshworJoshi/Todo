import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  const handleClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      <input type='checkbox' />
      {todo.title} <button onClick={handleClick}>X</button>
    </div>
  );
};

export default TodoItem;
