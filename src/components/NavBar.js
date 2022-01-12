import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.imgur.com/29phue5.png"
              width="30"
              height="30"
              className="d-inline-block"
            />{" "}
            &nbsp; <b>Task App</b>
          </Navbar.Brand>

          <Nav className="me-auto">
            <DropdownButton
              id="dropdown-basic-primary"
              title="Search"
              variant="secondary"
            >
              <Dropdown.Item href="#/action-1">Category1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Category2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Category3</Dropdown.Item>
            </DropdownButton>

            {/* <a href="/search">
              <i className="fa fa-fw fa-search"></i> Search
            </a> */}

            <a href="/requests">
              <i className="fa fa-fw fa-envelope"></i> Requests
            </a>

            <a href="/tasks">
              <i className="fa fa-fw fa-briefcase"></i> Tasks
            </a>
          </Nav>

          <Nav placement="end">
            <a href="/login">
              <i className="fa fa-fw fa-user"></i> Log In
            </a>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
