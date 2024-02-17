import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useTasks } from "../../TaskProvider";
import { FaPlus } from "react-icons/fa6";

const TodoInput = () => {
  const { addTask } = useTasks();
  const [todo, setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (todo !== "") {
      addTask(e.target[0].value);
    }

    setTodo("");
  }
  return (
    <Form onSubmit={addTodo}>
      <InputGroup>
        <Form.Control
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add Todo"
          value={todo}
        />
        <Button variant="outline-primary" id="button-addon2" type="submit" className="d-flex align-items-center">
          <FaPlus />
          Add Todo
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoInput;
