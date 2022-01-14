import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "./Login.module.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
      console.log(data);

      if (res.status === 200) {
        setMessage("Log in successful!");
      } else {
        setMessage("Log in unsuccessful!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //  <form
  //    action="http://localhost:5001/sessions/new"
  //    method="post"
  //    className="form-submit"
  //  >

  return (
    <div className="login">
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

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" id="formGridForgotPw">
            <Form.Text className="text-muted" style={{ float: "right" }}>
              <i>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Forgot password?
                </a>
              </i>
            </Form.Text>
          </Form.Group>
        </Row>

        <div className="d-grid gap-2">
          <Button
            variant="dark"
            type="submit"
            size="lg"
            // onClick={props.handleLogin}
          >
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

      <div className={styles.message}>
        {message ? (
          <Alert variant="dark">
            <p>{message}</p>
          </Alert>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
