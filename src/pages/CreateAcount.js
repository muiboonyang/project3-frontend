import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import styles from "./CreateAcount.module.css";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/users/new", {
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
        setMessage("Account created!");
      } else {
        setMessage("Account not created!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="createAccount">
      <h3>Create Account</h3>
      <br />

      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formRegisterUsername">
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

        <Form.Group className="mb-3" controlId="formRegisterPassword">
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

        <Row className="mb-3"></Row>

        <div className="d-grid gap-2">
          <Button variant="dark" type="submit" size="lg">
            Submit
          </Button>
        </div>
      </form>

      <hr />

      <Form>
        <div className="d-grid gap-2">
          <Button variant="outline-dark" type="submit" size="lg" href="/login">
            Already have an account? Click here to log in
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

export default CreateAccount;
