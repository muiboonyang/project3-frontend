import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
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

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sei33-community-app.herokuapp.com/users/new",
        {
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
        }
      );

      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setSuccessMessage("Account created!");
        setShowMessage(true);
        setUsername("");
        setPassword("");
        setName("");
        setEmail("");
        setContact("");
        setAddress("");
        setUnit("");
        setZipcode("");
      } else {
        setFailureMessage("Account not created!");
        setShowMessage(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.message}>
        {successMessage && showMessage ? (
          <Alert
            variant="success"
            onClose={() => setShowMessage(false)}
            dismissible
          >
            {successMessage}
          </Alert>
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
            <button className={styles.create} type="submit">
              Submit
            </button>
          </div>
        </form>

        <hr />

        <Form>
          <div className="d-grid gap-2">
            <NavLink to="/login">
              <button className={styles.login} type="submit">
                Already have an account? Click here to log in
              </button>
            </NavLink>
          </div>
        </Form>

        <br />
      </div>
    </>
  );
};

export default CreateAccount;
