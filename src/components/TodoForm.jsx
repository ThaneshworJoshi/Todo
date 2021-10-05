import React from "react";
import { Button } from "@material-ui/core";

const TodoForm = ({ newTodo, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Todo</label> <br />
        <div>
          <input
            type="text"
            name="todo"
            placeholder="Enter Here..."
            value={newTodo}
            onChange={handleChange}
          />
          {/* <Button variant='contained'>Default</Button> */}
          <Button
            className="add-btn btn btn-primary "
            variant="contained"
            color="primary"
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
