import React, { createContext, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import FilterDD from "./components/FilterDD/FilterDD";
import { Stack } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Stack gap={3}>
        <Row>
          <Header />
        </Row>
        <Row>
          <TodoInput />
        </Row>
        <Row>
          <TodoList />
        </Row>
      </Stack>
    </Container>
  );
};

export default App;
