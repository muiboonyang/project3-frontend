import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Requests = () => {
  return (
    <div className="requests">
      <form
        action="http://localhost:5001/requests"
        method="post"
        className="form-submit"
      >
        {/* <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter name"
        /> */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control type="input" name="name" placeholder="Enter name" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formNumber">
            <Form.Label>Contact number</Form.Label>
            <Form.Control
              type="number"
              name="contact"
              placeholder="Enter contact number"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" placeholder="Enter address" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Unit Number</Form.Label>
            <Form.Control name="unit" placeholder="Enter unit number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control name="zipcode" placeholder="Enter zip code" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formIssueType">
            <Form.Label>Type of Task</Form.Label>
            <Form.Select name="type" defaultValue="Select issue type...">
              <option>Select task type...</option>
              <option>Task 1</option>
              <option>Task 2</option>
              <option>Task 3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" placeholder="Enter date" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Comments</Form.Label>
          <Form.Control name="comments" as="textarea" rows={3} />
          <Form.Text className="text-muted">
            Your feedback will not be shared with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="dark" type="submit" style={{ float: "right" }}>
          Submit
        </Button>

        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Requests;
