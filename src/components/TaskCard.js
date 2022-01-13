import React from "react";
import styles from "./TaskCard.module.css";

const TaskCard = (props) => {
  return (
    <div className={styles.container}>
      <p>Name: {props.tasks.name}</p>

      <p>Email: {props.tasks.email}</p>

      <p>
        Type:{" "}
        {props.tasks.type.charAt(0).toUpperCase() + props.tasks.type.slice(1)}
      </p>

      <p>Comments: {props.tasks.comments}</p>
    </div>
  );
};

export default TaskCard;
