import { Link } from "react-router-dom";
import React, { useContext } from "react";
import LoginContext from "../context/login-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const loginContext = useContext(LoginContext);

  return (
    <div className={styles.navbar}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <b>
              <i className="fa fa-fw fa-tasks"></i> Task App
            </b>
          </Link>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
              <i className="fa fa-fw fa-search"></i> Search Category
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Link to="/search/all">
                <Dropdown.Item className={styles.dropdown} value="all">
                  <i className="fa fa-fw fa-thumb-tack"></i> All tasks
                </Dropdown.Item>
              </Link>

              <Link to="/search/plumbing">
                <Dropdown.Item className={styles.dropdown} value="plumbing">
                  <i className="fa fa-fw fa-tint"></i> Plumbing
                </Dropdown.Item>
              </Link>

              <Link to="/search/cleaning">
                <Dropdown.Item className={styles.dropdown} value="cleaning">
                  <i className="fa fa-fw fa-shower"></i> Cleaning
                </Dropdown.Item>
              </Link>

              <Link to="/search/grocery">
                <Dropdown.Item className={styles.dropdown} value="grocery">
                  <i className="fa fa-fw fa-shopping-cart"></i> Grocery
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/createrequest">
            <i className="fa fa-fw fa-envelope"></i> New Request
          </Link>
        </Nav>

        <Nav>
          {loginContext.profileName ? (
            <>
              <Link to="/mytasks">
                <i className="fa fa-fw fa-list"></i>
                My Tasks
              </Link>

              <Link to="/mytasks">
                <i className="fa fa-fw fa-user"></i>
                {loginContext.profileName}
              </Link>

              <Link to="/">
                <i className="fa fa-fw fa-sign-out"></i>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <i className="fa fa-fw fa-user"></i> Log In
            </Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
