import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {/* <img
              alt=""
              src="https://i.imgur.com/29phue5.png"
              width="30"
              height="30"
              className="d-inline-block"
            />{" "}
            &nbsp;{" "} */}
            <b>
              <i className="fa fa-fw fa-tasks"></i> Task App
            </b>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="dark"
              >
                <i className="fa fa-fw fa-search"></i> Search
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item
                  className={styles.dropdown}
                  href="/search/plumbing"
                  value="plumbing"
                >
                  <i className="fa fa-fw fa-tint"></i> Plumbing
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.dropdown}
                  href="/search/cleaning"
                  value="cleaning"
                >
                  <i className="fa fa-fw fa-shower"></i> Cleaning
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.dropdown}
                  href="/search/grocery"
                  value="grocery"
                >
                  <i className="fa fa-fw fa-shopping-cart"></i> Grocery
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <a href="/search">
              <i className="fa fa-fw fa-search"></i> Search
            </a> */}

            <a href="/requests">
              <i className="fa fa-fw fa-envelope"></i> New Request
            </a>
          </Nav>

          <Nav placement="end">
            <a href="/tasks">
              <i className="fa fa-fw fa-list"></i> My Tasks
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
