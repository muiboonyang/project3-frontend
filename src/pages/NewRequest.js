import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewRequest = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log(formData);
    await fetch("http://localhost:5001/requests", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="requests">
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Submit</button>

      {/* <form
        action="http://localhost:5001/requests"
        method="post"
        className="form-submit"
      >
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="input"
              name="name"
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
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formNumber">
            <Form.Label>Contact number</Form.Label>
            <Form.Control
              type="number"
              name="contact"
              placeholder="Enter contact number"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" placeholder="Enter address" required />
        </Form.Group>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridZip">
            <Form.Label>Unit number</Form.Label>
            <Form.Control
              name="unit"
              placeholder="Enter unit number"
              required
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridZip">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              name="zipcode"
              placeholder="Enter zip code"
              required
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formIssueType">
            <Form.Label>Task type</Form.Label>
            <Form.Select
              name="type"
              defaultValue="Select issue type..."
              required
            >
              <option value="" hidden>
                Select task type...
              </option>
              <option value="plumbing">Plumbing</option>
              <option value="cleaning">Cleaning</option>
              <option value="grocery">Grocery</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" required />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" placeholder="Enter title" required />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formDeadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" name="deadline" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="formText">
            <Form.Label>Comments</Form.Label>
            <Form.Control name="comments" as="textarea" rows={3} />
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
      </form> */}
    </div>
  );
};

export default NewRequest;
