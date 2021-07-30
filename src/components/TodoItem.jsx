import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleTodoDone }) => {
  const handleClick = () => {
    removeTodo(todo.id);
  };

  const handelChange = (event) => {
    toggleTodoDone(todo.id);
  };

  return (
    <div>
      <input type='checkbox' checked={todo.done} onChange={handelChange} />
      {todo.done ? <del>{todo.title}</del> : todo.title}

      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default TodoItem;
