import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../context/login-context";
import styles from "./MyTasksCard.module.css";
import Button from "react-bootstrap/Button";

const MyTasksCard = (props) => {
  const input = useRef("");
  const loginContext = useContext(LoginContext);

  return (
    <div className={styles.container}>
      <NavLink to={`search/${props.task.type}/${props.task._id}`}>
        <div className={styles.detailsContainer}>
          <img
            src={
              props.task.image.startsWith("http")
                ? props.task.image
                : `https://sei33-community-app.herokuapp.com/${props.task.image}`
            }
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
          <Button variant="outline-dark" onClick={() => props.completeTask()}>
            Complete
          </Button>
        </div>
      ) : (
        ""
      )}

      {props.task.completed &&
      props.task.username === loginContext.profileName ? (
        props.task.review ? (
          <div className={styles.reviewSubmit}>
            <Button variant="danger" disabled>
              Review Submitted!
            </Button>
          </div>
        ) : (
          <div className={styles.giveReviews}>
            <label htmlFor="reviews">Give a review!</label>
            <textarea id="reviews" ref={input}></textarea>
            <Button
              variant="outline-danger"
              onClick={() => {
                props.handleSubmitReview(
                  props.task._id,
                  input.current.value,
                  props.task.acceptedBy
                );
              }}
            >
              Submit Review
            </Button>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default MyTasksCard;
