import React from "react";
import styles from "./TaskCard.module.css";
import Button from "react-bootstrap/Button";

const TaskCard = (props) => {
  const putFunction = async () => {
    await fetch("http://localhost:5001/tasks", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ status: "accepted", id: props.tasks.id }), // body data type must match "Content-Type" header
    });
  };

  return (
    <div className={styles.container}>
      <p>Name: {props.tasks.name}</p>

      <p>Email: {props.tasks.email}</p>

      <p>
        Type:{" "}
        {props.tasks.type.charAt(0).toUpperCase() + props.tasks.type.slice(1)}
      </p>

      <p>Comments: {props.tasks.comments}</p>

      <form
        action="http://localhost:5001/tasks"
        method="post"
        className="form-submit"
      >
        {/* <input type="submit" value="Help" onClick={putFunction} /> */}
        {/* <button type="submit" value="Accepted" name="status">
          Help
        </button> */}
        <Button variant="dark" type="submit" onClick={putFunction}>
          Help
        </Button>
      </form>
    </div>
  );
};

export default TaskCard;
