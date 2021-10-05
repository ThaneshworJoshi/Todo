import React from "react";

const TodoItem = ({ todo, removeTodo, toggleTodoDone }) => {
  const handleClick = () => {
    removeTodo(todo.id);
  };

  const handelChange = (event) => {
    toggleTodoDone(todo.id);
  };

  return (
    <div className="todo-list">
      <div>
        <input type="checkbox" checked={todo.done} onChange={handelChange} />
        {todo.done ? <del>{todo.title}</del> : todo.title}
      </div>
      <div className="delete-todo">
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
};

export default TodoItem;
