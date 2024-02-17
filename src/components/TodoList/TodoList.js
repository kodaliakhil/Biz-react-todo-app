import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTasks } from "../../TaskProvider";
import { RxCross2 } from "react-icons/rx";
import { BiTask, BiTaskX } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import todoImg from "../../assets/todo-img.svg";

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
    <>
      {todos.length > 0 ? (
        <Accordion>
          {todos?.map((todo) => {
            return (
              <Accordion.Item key={todo.id} eventKey={todo.id}>
                <Accordion.Header
                  style={{ textDecoration: todo.status && "line-through" }}
                >
                  {todo.title}
                  {todo.status && <FaCheck className="mx-2" />}
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
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>There's nothing in your Todo's</p>
          <img src={todoImg} style={{width:"300px"}}/>
        </div>
      )}
    </>
  );
};

export default TodoList;
