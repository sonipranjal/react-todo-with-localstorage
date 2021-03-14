import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log(localStorage);
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (key) => {
    setTodos(todos.filter(({ id }) => key !== id));
  };

  return (
    <Container fluid>
      <h1>Todo With LocalStorage</h1>
      <Row className="form-center">
        <TodoForm addTodos={addTodos} />
      </Row>
      <Row className="todo-list">
        <Todos todos={todos} markComplete={markComplete} />
      </Row>
    </Container>
  );
};

export default App;
