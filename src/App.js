import React, { createContext, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { Stack } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Stack gap={3}>
        <Row>
          <Header />
        </Row>
        <Container style={{ maxWidth: "600px" }}>
          <Stack gap={3}>
            <Row>
              <TodoInput />
            </Row>
            <Row>
              <TodoList />
            </Row>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default App;
