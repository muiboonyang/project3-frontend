import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../context/login-context";
import styles from "./MyTasksCard.module.css";
import Button from "react-bootstrap/Button";

const MyTasksCard = (props) => {
  const input = useRef("");
  const loginContext = useContext(LoginContext);

  const handleSubmitReview = async () => {
    props.setReview(input.current.value);
    await fetch("https://sei33-community-app.herokuapp.com/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.task._id,
        review: input.current.value,
        reviewer: props.task.username,
        acceptedBy: props.task.acceptedBy,
      }),
    });
  };

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
            <Button variant="outline-danger" onClick={handleSubmitReview}>
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
