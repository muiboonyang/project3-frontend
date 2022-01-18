import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState("");
  const [showFailure, setShowFailure] = useState("");

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
          name: name,
          email: email,
          contact: contact,
          address: address,
          unit: unit,
          zipcode: zipcode,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setMessage("Account created!");
        setShowSuccess(true);
        setUsername("");
        setPassword("");
        setName("");
        setEmail("");
        setContact("");
        setAddress("");
        setUnit("");
        setZipcode("");
      } else {
        setMessage("Account not created!");
        setShowFailure(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.message}>
        {message && showSuccess ? (
          <Alert
            variant="success"
            onClose={() => setShowSuccess(false)}
            dismissible
          >
            {message}
          </Alert>
        ) : null}
        {message && showFailure ? (
          <Alert
            variant="danger"
            onClose={() => setShowFailure(false)}
            dismissible
          >
            {message}
          </Alert>
        ) : null}
      </div>

      <div className={styles.createAccount}>
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

          <hr />

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formNumber">
              <Form.Label>Contact number</Form.Label>
              <Form.Control
                type="number"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter contact number"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridUnit">
              <Form.Label>Unit number</Form.Label>
              <Form.Control
                name="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Enter unit number"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridZip">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="Enter zip code"
                required
              />
            </Form.Group>
          </Row>

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
              href="/login"
            >
              Already have an account? Click here to log in
            </Button>
          </div>
        </Form>

        <br />
      </div>
    </>
  );
};

export default CreateAccount;
