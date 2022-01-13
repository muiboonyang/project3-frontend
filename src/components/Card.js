import React, { useState } from "react";
import styles from "./TaskCard.module.css";

const Card = (props) => {
  const [status, setStatus] = useState(false);

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
    const data = await res.json();
    setStatus(data);
  };

  return (
    <div className={styles.container}>
      <p>Task ID: {props.requests._id}</p>
      <p>Name: {props.requests.name}</p>
      <p>Email: {props.requests.email}</p>
      <p>
        Type:{" "}
        {props.requests.type.charAt(0).toUpperCase() +
          props.requests.type.slice(1)}
      </p>
      <p>Contact: {props.requests.contact}</p>
      <p>Address: {props.requests.address}</p>
      <p>Date: {props.requests.date}</p>
      <p>Comments: {props.requests.comments}</p>

      <input
        type="submit"
        value={status === true ? "HELPED" : "HELP"}
        onClick={putFunction}
      />
    </div>
  );
};

export default Card;
