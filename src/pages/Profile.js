import React, { useState, useEffect, useContext } from "react";
import LoginContext from "../context/login-context";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./Profile.module.css";

const Profile = () => {
  const loginContext = useContext(LoginContext);
  const currentUser = loginContext.profileName;

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

  const [userInfo, setUserInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/${currentUser}/update`, {
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

  //================
  // Fetch user data from API (by specific username)
  //================

  const url = `http://localhost:5001/users/${currentUser}`;

  const getUserInfo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

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

      <br />

      <div className={styles.profile}>
        <form onSubmit={handleSubmit}>
          <h2>Update Profile</h2>
          <Form.Group className="mb-3" controlId="formRegisterUsername">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              value={username}
              placeholder={userInfo.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPassword">
            <Form.Label>Password: {userInfo.password} </Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <hr />

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
              <Form.Label>Name: </Form.Label>
              <Form.Control
                type="input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={userInfo.name}
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formEmail">
              <Form.Label>Email address: </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={userInfo.email}
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formNumber">
              <Form.Label>Contact number: </Form.Label>
              <Form.Control
                type="number"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={userInfo.contact}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address: </Form.Label>
            <Form.Control
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={userInfo.address}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridUnit">
              <Form.Label>Unit number: </Form.Label>
              <Form.Control
                name="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder={userInfo.unit}
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridZip">
              <Form.Label>Zip code: </Form.Label>
              <Form.Control
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder={userInfo.zipcode}
                required
              />
            </Form.Group>
          </Row>

          <Button variant="dark" type="submit" style={{ float: "right" }}>
            Update
          </Button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Profile;
