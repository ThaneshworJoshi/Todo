import React from 'react';

const TodoForm = ({ newTodo, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Todo</label>
        <input
          type='text'
          name='todo'
          value={newTodo}
          onChange={handleChange}
        />
        <button className='btn btn-primary' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
