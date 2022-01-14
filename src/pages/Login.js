import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = (props) => {
  return (
    <div className="login">
      <h3>Log In</h3>
      <br />

      <form
        action="http://localhost:5001/sessions/new"
        method="post"
        className="form-submit"
      >
        <Form.Group className="mb-3" controlId="formLoginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
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

      <Form>
        <hr />
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
    </div>
  );
};

export default Login;
