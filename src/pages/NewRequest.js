import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewRequest = () => {
  return (
    <div className="requests">
      <form
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

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Unit number</Form.Label>
            <Form.Control
              name="unit"
              placeholder="Enter unit number"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              name="zipcode"
              placeholder="Enter zip code"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formIssueType">
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
            <Form.Control
              type="date"
              name="date"
              placeholder="Enter date"
              required
            />
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

export default NewRequest;