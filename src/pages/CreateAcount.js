import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const CreateAccount = () => {
  return (
    <div className="login">
      <Form>
        <h3>Create Account</h3>
        <br />

        <Form.Group className="mb-3" controlId="formRegisterUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Row className="mb-3"></Row>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit" size="lg">
            Submit
          </Button>
          <hr />
          <Button variant="outline-dark" type="submit" size="lg" href="/login">
            Already have an account? Click here to log in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateAccount;
