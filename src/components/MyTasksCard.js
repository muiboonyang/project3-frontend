import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MyTasksCard.module.css";
import Button from "react-bootstrap/Button";

const MyTasksCard = (props) => {
  return (
    <div className={styles.container}>
      <NavLink to={`${props.task.type}/${props.task._id}`}>
        <div className={styles.detailsContainer}>
          <img
            src={`http://localhost:5001/${props.task.image}`}
            alt={`${props.task.title}`}
          />
          <div>
            <h6>{props.task.name}</h6>
            <h3>{props.task.title}</h3>
          </div>
        </div>
      </NavLink>
      {props.task.accepted && !props.task.completed ? (
        <div className={styles.bottomContainer}>
          <Button
            variant="outline-dark"
            onClick={() =>
              props.completeTask(
                props.task._id,
                !props.task.completed,
                props.index
              )
            }
          >
            Complete
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyTasksCard;
