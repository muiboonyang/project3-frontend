import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "./CreateRequest.module.css";

const CreateRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onFileUpload = async (e) => {
    if (selectedFile) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", selectedFile);
      console.log(formData);
      await fetch("http://localhost:5001/requests", {
        method: "POST",
        body: formData,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/requests", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          contact: contact,
          address: address,
          unit: unit,
          zipcode: zipcode,
          type: type,
          date: date,
          title: title,
          deadline: deadline,
          comments: comments,
          message: message,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        setMessage("Request created successfullly");
      } else {
        setMessage("Request creation unsuccessful!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={() => {
        handleSubmit();
        onFileUpload();
      }}
    >
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

      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formIssueType">
          <Form.Label>Task type</Form.Label>
          <Form.Select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="" hidden>
              Select task type...
            </option>
            <option name="plumbing" value="Plumbing">
              Plumbing
            </option>
            <option name="cleaning" value="Cleaning">
              Cleaning
            </option>
            <option name="grocery" value="Grocery">
              Grocery
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formDeadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            name="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Upload file</Form.Label>
          <br />
          <input type="file" onChange={onFileChange} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            as="textarea"
            rows={3}
          />
          <Form.Text className="text-muted">
            Your feedback will not be shared with anyone else.
          </Form.Text>
        </Form.Group>
      </Row>

      <Button variant="dark" type="submit" style={{ float: "right" }}>
        Submit
      </Button>

      <br />
      <br />
      <br />
      <div className={styles.message}>
        {message ? (
          <Alert variant="dark">
            <p>{message}</p>
          </Alert>
        ) : null}
      </div>
    </form>
  );
};

export default CreateRequest;
