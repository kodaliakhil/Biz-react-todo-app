import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import FilterDD from "../FilterDD/FilterDD";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
                
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FaTasks className="mx-2"/>
          Todo App
        </Navbar.Brand>
        <FilterDD />
      </Container>
    </Navbar>
  );
};

export default Header;
