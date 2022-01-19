import React, { useState, useEffect, useContext } from "react";
import MyTasksCard from "../components/MyTasksCard";
import LoginContext from "../context/login-context";
import { v4 as uuidv4 } from "uuid";
import styles from "./MyTasks.module.css";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);
  const [review, setReview] = useState("");
  const loginContext = useContext(LoginContext);

  const fetchAllTasks = async () => {
    const res = await fetch(
      "https://sei33-community-app.herokuapp.com/search/all"
    );
    const data = await res.json();
    setAllTasks(data);
    setAllStatuses(data);
  };

  const completeTask = async (identifier, status, index) => {
    const res = await fetch(
      "https://sei33-community-app.herokuapp.com/tasks/complete",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: identifier,
          completed: true,
        }),
      }
    );

    const data = await res.json();
    console.log(data);

    const updatedStatus = allStatuses;
    updatedStatus[index].completed = status;
    setAllStatuses([...updatedStatus]);
  };

  useEffect(() => {
    fetchAllTasks();
  }, [review]);

  return (
    <div className={styles.main}>
      <div className={styles.myTasks}>
        <h1>My Tasks</h1>

        <h4>In Progress</h4>

        <div className={styles.container}>
          {allTasks.map((task, index) => {
            return !task.completed &&
              task.acceptedBy === loginContext.profileName ? (
              <div key={uuidv4()}>
                <MyTasksCard
                  task={task}
                  index={index}
                  completeTask={completeTask}
                />
              </div>
            ) : (
              ""
            );
          })}
        </div>

        <h4>Completed</h4>

        <div className={styles.container}>
          {allTasks.map((task) => {
            return task.completed &&
              task.acceptedBy === loginContext.profileName ? (
              <div key={uuidv4()}>
                <MyTasksCard task={task} />
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>

      <div className={styles.myRequests}>
        <h1>My Requests</h1>
        <h4>Pending Acceptance</h4>
        <div className={styles.container}>
          {allTasks.map((task) => {
            return task.username === loginContext.profileName &&
              !task.accepted ? (
              <div key={uuidv4()}>
                <MyTasksCard task={task} />
              </div>
            ) : (
              ""
            );
          })}
        </div>

        <h4>In Progress</h4>

        <div className={styles.container}>
          {allTasks.map((task, index) => {
            return task.username === loginContext.profileName &&
              task.accepted &&
              !task.completed ? (
              <div key={uuidv4()} className={styles.container}>
                <MyTasksCard
                  task={task}
                  index={index}
                  completeTask={completeTask}
                />
              </div>
            ) : (
              ""
            );
          })}
        </div>

        <h4>Completed</h4>
        <div className={styles.container}>
          {allTasks.map((task) => {
            return task.username === loginContext.profileName &&
              task.accepted &&
              task.completed ? (
              <div key={uuidv4()}>
                <MyTasksCard task={task} setReview={setReview} />
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
