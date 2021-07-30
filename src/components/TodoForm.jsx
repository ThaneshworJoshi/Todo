import React from 'react';
import { Button } from '@material-ui/core';

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
        {/* <Button variant='contained'>Default</Button> */}
        <Button
          className='btn btn-primary'
          variant='contained'
          color='primary'
          type='submit'
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
