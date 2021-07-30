import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodoDone, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoDone={toggleTodoDone}
            removeTodo={removeTodo}
          />
        );
      })}
      <button>all done</button>
    </div>
  );
};

export default TodoList;
