import React from "react";

const MyTasksCard = (props) => {
  return (
    <>
      <p>
        <a href={`/search/${props.task.type}/${props.task._id}`}>
          {props.task.title}
        </a>
      </p>
      {props.task.accepted && !props.task.completed ? (
        <button
          onClick={() =>
            props.completeTask(
              props.task._id,
              !props.task.completed,
              props.index
            )
          }
        >
          Complete
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default MyTasksCard;
