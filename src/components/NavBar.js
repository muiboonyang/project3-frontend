import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import LoginContext from "../context/login-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const loginContext = useContext(LoginContext);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/sessions/logout");
      await res.json();

      if (res.status === 200) {
        setMessage("Log out successful!");
        loginContext.setLoggedIn(false);
        loginContext.setProfileName("");
        setShow(true);
      } else {
        setMessage("Log out unsuccessful!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="dark"
              >
                <i className="fa fa-fw fa-search"></i> Search Category
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Link to="/search/all">
                  <Dropdown.Item
                    as="button"
                    className={styles.dropdown}
                    value="all"
                  >
                    <i className="fa fa-fw fa-thumb-tack"></i> All tasks
                  </Dropdown.Item>
                </Link>

                <Link to="/search/plumbing">
                  <Dropdown.Item
                    as="button"
                    className={styles.dropdown}
                    value="plumbing"
                  >
                    <i className="fa fa-fw fa-tint"></i> Plumbing
                  </Dropdown.Item>
                </Link>

                <Link to="/search/cleaning">
                  <Dropdown.Item
                    as="button"
                    className={styles.dropdown}
                    value="cleaning"
                  >
                    <i className="fa fa-fw fa-shower"></i> Cleaning
                  </Dropdown.Item>
                </Link>

                <Link to="/search/grocery">
                  <Dropdown.Item
                    as="button"
                    className={styles.dropdown}
                    value="grocery"
                  >
                    <i className="fa fa-fw fa-shopping-cart"></i> Grocery
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Nav>
            {loginContext.profileName ? (
              <>
                <Link to="/createrequest">
                  <i className="fa fa-fw fa-envelope"></i> New Request
                </Link>
                <Link to="/mytasks">
                  <i className="fa fa-fw fa-list"></i>
                  My Tasks
                </Link>

                <Link to="/profile">
                  <i className="fa fa-fw fa-user"></i>
                  {loginContext.profileName}
                </Link>

                <Link onClick={handleLogout} to="/">
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

      <br />
      <div className={styles.message}>
        {message && show ? (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{message}</Alert.Heading>
          </Alert>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
