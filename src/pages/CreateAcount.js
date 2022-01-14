import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const CreateAccount = () => {
  return (
    <div className="login">
      <h3>Create Account</h3>
      <br />

      <form
        action="http://localhost:5001/users/new"
        method="post"
        className="form-submit"
      >
        <Form.Group className="mb-3" controlId="formRegisterUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Row className="mb-3"></Row>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit" size="lg">
            Submit
          </Button>
        </div>
      </form>

      <hr />

      <form>
        <div className="d-grid gap-2">
          <Button variant="outline-dark" type="submit" size="lg" href="/login">
            Already have an account? Click here to log in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
