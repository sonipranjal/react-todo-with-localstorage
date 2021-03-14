import React, { useState } from "react";

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please write todo!");
    }
    const todo = {
      title: todoString,
      id: v4(),
    };

    //TODO
    addTodos(todo);
    setTodoString("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input-css"
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter Todo Task"
          value={todoString}
          onChange={(e) => setTodoString(e.target.value)}
        />
        <button type="submit" color="#7868e6">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoForm;
