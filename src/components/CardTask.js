import React, { useState } from "react";
// import styles from "./CardTask.module.css";
import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButton from "react-bootstrap/ToggleButton";

const CardTask = (props) => {
  const [status, setStatus] = useState(false);
  const [checked, setChecked] = useState(false);

  const putFunction = async () => {
    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        status === true
          ? JSON.stringify({ accepted: false, id: props.requests._id })
          : JSON.stringify({ accepted: true, id: props.requests._id }),
    });
    // const data = await res.json();
    await res.json();
    setStatus(true);
  };

  return (
    <Row md={"auto"} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card
            bg="light"
            border="dark"
            style={{ width: "18rem" }}
            className="task_card_array"
          >
            <Card.Body>
              <Card.Title>Name: {props.requests.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Email: {props.requests.email}
              </Card.Subtitle>
              <Card.Text>
                {" "}
                Type:{" "}
                {props.requests.type.charAt(0).toUpperCase() +
                  props.requests.type.slice(1)}
              </Card.Text>
              <Card.Text>Contact: {props.requests.contact}</Card.Text>
              <Card.Text>Address: {props.requests.address}</Card.Text>
              <Card.Text>Date: {props.requests.date}</Card.Text>
              <Card.Text>Comments: {props.requests.comments}</Card.Text>
              <Card.Link href="#">Details</Card.Link>
              {/* <ToggleButton
                className="mb-1"
                id="toggle-check"
                type="checkbox"
                variant="outline-success"
                checked={checked}
                useState={true}
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Checked
              </ToggleButton>
              <br></br>
              <ToggleButton
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                variant="outline-danger"
                checked={checked}
                useState={false}
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Cancel
              </ToggleButton> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardTask;
