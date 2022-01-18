import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "./CreateRequest.module.css";
import LoginContext from "../context/login-context";

const CreateRequest = () => {
  const loginContext = useContext(LoginContext);
  const currentUser = loginContext.profileName;

  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [comments, setComments] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onFileUpload = async (e) => {
    if (selectedFile) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", selectedFile);
      console.log(formData);
      await fetch(`http://localhost:5001/requests/${currentUser}`, {
        method: "POST",
        body: formData,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/requests/${currentUser}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          date: date,
          title: title,
          deadline: deadline,
          comments: comments,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        setSuccessMessage("Request created successfully!");
        setShowMessage(true);
        setType("");
        setDate("");
        setTitle("");
        setDeadline("");
        setComments("");
        setSelectedFile("");
      } else {
        setFailureMessage("Request creation unsuccessful!");
        setShowMessage(true);

      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        onFileUpload(e);
      }}
    >
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

      <br />

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
            <option name="plumbing" value="plumbing">
              Plumbing
            </option>
            <option name="cleaning" value="cleaning">
              Cleaning
            </option>
            <option name="grocery" value="grocery">
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
    </form>
  );
};

export default CreateRequest;
