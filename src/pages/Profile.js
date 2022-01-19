import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../context/login-context";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "./Profile.module.css";

const Profile = () => {
  const loginContext = useContext(LoginContext);
  const currentUser = loginContext.profileName;
  const [userInfo, setUserInfo] = useState([]);

  //================
  // Fetch user data from API (by specific username)
  //================

  const url = `https://sei33-community-app.herokuapp.com/users/${currentUser}`;

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

  //================
  // Update current user
  //================

  const [password, setPassword] = useState("");
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [contact, setContact] = useState(userInfo.contact);
  const [address, setAddress] = useState(userInfo.address);
  const [unit, setUnit] = useState(userInfo.unit);
  const [zipcode, setZipcode] = useState(userInfo.zipcode);

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://sei33-community-app.herokuapp.com/users/${currentUser}/update`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
        setSuccessMessage("Account updated!");
        setShowMessage(true);
        setPassword("");
        setName("");
        setEmail("");
        setContact("");
        setAddress("");
        setUnit("");
        setZipcode("");
        // loginContext.setLoggedIn(false);
      } else {
        setFailureMessage("Account not updated!");
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

      <div className={styles.profile}>
        <form onSubmit={handleSubmit}>
          <h2>Update Profile</h2>
          <Form.Group className="mb-3" controlId="formRegisterUsername">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={userInfo.username}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRegisterPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
              required
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
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridZip">
              <Form.Label>Zip code: </Form.Label>
              <Form.Control
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder={userInfo.zipcode}
              />
            </Form.Group>
          </Row>

          <button type="submit" className={styles.btn}>
            Update
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Profile;
