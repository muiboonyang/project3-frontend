import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <div className="login">
      <Form>
        <h3>Log In</h3>
        <br />

        <Form.Group className="mb-3" controlId="formLoginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
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
          <Button variant="dark" type="submit" size="lg">
            Log In
          </Button>
          <hr />
          <Button variant="outline-dark" type="submit" size="lg">
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
