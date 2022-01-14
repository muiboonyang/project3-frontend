import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./NavBar.module.css";
import LoginContext from "../context/login-context";

const NavBar = () => {
  const loginContext = useContext(LoginContext);

  return (
    <div className={styles.navbar}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <b>
            <i className="fa fa-fw fa-tasks"></i> Task App
          </b>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
              <i className="fa fa-fw fa-search"></i> Search Category
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item
                className={styles.dropdown}
                href="/search/all"
                value="all"
              >
                <i className="fa fa-fw fa-thumb-tack"></i> All tasks
              </Dropdown.Item>

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

          <a href="/newrequest">
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
          <p>{loginContext.loginStatus}</p>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
