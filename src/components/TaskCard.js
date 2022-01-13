import React from "react";
// import styles from "./TaskCard.module.css";

const TaskCard = (props) => {
  return (
    <div>
      Name: {props.tasks.name}
      <br />
      Email: {props.tasks.email}
      <br />
      Comments: {props.tasks.comments}
    </div>
  );
};

export default TaskCard;
