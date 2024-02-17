import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTasks } from "../../TaskProvider";
import { RxCross2 } from "react-icons/rx";
import { BiTask, BiTaskX } from "react-icons/bi";

const TodoList = () => {
  const { setStatusTask, tasks, removeTask, filter } = useTasks();
  let todos;
  if (filter === "Incomplete") {
    todos = tasks.filter((t) => t.status === false);
  } else if (filter === "Completed") {
    todos = tasks.filter((t) => t.status === true);
  } else {
    todos = tasks;
  }
  function handleRemove(id) {
    removeTask(id);
  }

  return (
    <Accordion>
      {todos?.map((todo) => {
        return (
          <Accordion.Item key={todo.id} eventKey={todo.id}>
            <Accordion.Header
              style={{ textDecoration: todo.status && "line-through" }}
            >
              {todo.title}
            </Accordion.Header>
            <Accordion.Body className="d-flex justify-content-between">
              <Button
                className="d-flex align-items-center"
                variant="danger"
                onClick={() => handleRemove(todo.id)}
              >
                <RxCross2 />
                Remove
              </Button>
              <Button
                onClick={() => setStatusTask(todo.id)}
                className="d-flex align-items-center"
              >
                {todo.status ? <BiTaskX /> : <BiTask />}
                {todo.status ? "Incomplete" : "Complete"}
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default TodoList;
