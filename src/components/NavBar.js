import { NavLink, Link , Redirect} from "react-router-dom";
import React, { useState, useContext } from "react";
import LoginContext from "../context/login-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const loginContext = useContext(LoginContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/sessions/logout");
      await res.json();

      if (res.status === 200) {
        setSuccessMessage("Log out successful!");
        loginContext.setLoggedIn(false);
        loginContext.setProfileName("");
        setShowMessage(true);
      } else {
        setFailureMessage("Log out unsuccessful!");
        setShowMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <Navbar>
          <Navbar.Brand>
            <NavLink to="/" exact activeClassName={styles.active}>
              <b>
                <i className="fa fa-fw fa-tasks"></i> Task App
              </b>
            </NavLink>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant={"warning"}>
                <i className="fa fa-fw fa-search"></i> Search Category
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark" className={styles.dropdown}>
                <Link to="/search/all">
                  <Dropdown.Item as="button" value="all">
                    <i className="fa fa-fw fa-thumb-tack"></i> All tasks
                  </Dropdown.Item>
                </Link>

                <Link to="/search/business">
                  <Dropdown.Item as="button" value="business">
                    <i className="fa fa-fw fa-tint"></i> Business 
                  </Dropdown.Item>
                </Link>

                <Link to="/search/lifestyle">
                  <Dropdown.Item as="button" value="lifestyle">
                    <i className="fa fa-fw fa-shower"></i> Lifestyle
                  </Dropdown.Item>
                </Link>

                <Link to="/search/homeservices">
                  <Dropdown.Item as="button" value="homeservices">
                    <i className="fa fa-fw fa-shopping-cart"></i> Home Services
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Nav>
            {loginContext.profileName ? (
              <div className={styles.loggedInContainer}>
                <NavLink to="/createrequest" activeClassName={styles.active}>
                  <i className="fa fa-fw fa-envelope"></i> Create New Request
                </NavLink>
                <NavLink to="/mytasks" activeClassName={styles.active}>
                  <i className="fa fa-fw fa-list"></i>
                  My Tasks
                </NavLink>

                <NavLink to="/profile" activeClassName={styles.active}>
                  <i className="fa fa-fw fa-user"></i>
                  {loginContext.profileName}
                </NavLink>

                <NavLink onClick={handleLogout} to="/">
                  <i className="fa fa-fw fa-sign-out"></i>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/login" activeClassName={styles.active}>
                <i className="fa fa-fw fa-user"></i> Log In
              </NavLink>
            )}
          </Nav>
        </Navbar>
      </div>

      <div className={styles.message}>
        {successMessage && showMessage ? (
          <>
            <Redirect to="/login" />
            <Alert
              variant="success"
              onClose={() => setShowMessage(false)}
              dismissible
            >
              {successMessage}
            </Alert>
          </>
        ) : null}
        {failureMessage && showMessage ? (
          <Alert
            variant="danger"
            onClose={() => setShowMessage(false)}
            dismissible
          >
            {failureMessage}
          </Alert>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
