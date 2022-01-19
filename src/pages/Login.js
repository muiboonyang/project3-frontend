import React, { useState, useContext } from "react";
import LoginContext from "../context/login-context";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

const Login = () => {
  const loginContext = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/sessions/new", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setSuccessMessage("Log in successful!");
        loginContext.setLoggedIn(true);
        loginContext.setProfileName(data.username);
        setShowMessage(true);
        setUsername("");
        setPassword("");
      } else {
        setFailureMessage("Log in unsuccessful!");
        setShowMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.message}>
        {successMessage ? (
          <>
            <Redirect to="/" />
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

      <br />

      <div className={styles.login}>
        <h3>Log In</h3>
        <br />

        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formLoginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="dark" type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>

        <hr />

        <Form>
          <div className="d-grid gap-2">
            <Button
              variant="outline-dark"
              type="submit"
              size="lg"
              href="/register"
            >
              Create Account
            </Button>
          </div>
        </Form>

        <br />
      </div>
    </>
  );
};

export default Login;
