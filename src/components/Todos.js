import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <Container>
      <ListGroup className="mt-5 mb-2">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id} className="list-item">
            {todo.title}
            <span className="float-right" onClick={() => markComplete(todo.id)}>
              <FaCheckDouble className="icon" />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Todos;
