import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const [status, setStatus] = useState(props.requests.accepted);

  const updateAcceptance = async () => {
    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.requests._id,
        accepted: !status,
      }),
    });

    const data = await res.json();
    console.log(data);

    setStatus(!status);
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
      {props.requests.completed === true ? (
        ""
      ) : (
        <input
          type="submit"
          value={status === true ? "HELPED" : "HELP"}
          onClick={updateAcceptance}
        />
      )}
    </div>
  );
};

export default Card;
