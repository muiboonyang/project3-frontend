import React, { useState, useEffect } from "react";
import MyTasksCard from "../components/MyTasksCard";
import { v4 as uuidv4 } from "uuid";
import styles from "./MyTasks.module.css";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);

  const fetchAllTasks = async () => {
    const res = await fetch("http://localhost:5001/search/all");
    const data = await res.json();
    setAllTasks(data);
    setAllStatuses(data);
  };

  const completeTask = async (identifier, status, index) => {
    const res = await fetch("http://localhost:5001/tasks/complete", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: identifier,
        completed: true,
      }),
    });

    const data = await res.json();
    console.log(data);

    const updatedStatus = allStatuses;
    updatedStatus[index].completed = status;
    setAllStatuses([...updatedStatus]);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      {/* <div className={styles.myTask}> */}
      <p>
        <h1>My Tasks</h1>
      </p>
      <hr></hr>
      <p>
        <h3>In Progress</h3>
      </p>
      <hr></hr>
      <div className={styles.container}>
        {allTasks.map((task, index) => {
          return task.accepted && !task.completed ? (
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
      <p>
        <h3>Completed</h3>
      </p>
      <hr></hr>
      <div className={styles.container}>
        {allTasks.map((task) => {
          return task.accepted && task.completed ? (
            <div key={uuidv4()}>
              <MyTasksCard task={task} />
            </div>
          ) : (
            ""
          );
        })}
        {/* </div> */}
      </div>
      {/* <div className={styles.myRequests}> */}
      <p>
        <h1>My Requests</h1>
      </p>
      <hr></hr>
      <p>
        <h3>Pending Acceptance</h3>
      </p>
      <hr></hr>
      <div className={styles.container}>
        {allTasks.map((task) => {
          return task.name === "Jeng Mun" && !task.accepted ? (
            <div key={uuidv4()}>
              <MyTasksCard task={task} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <p>
        <h3>In Progress</h3>
      </p>
      <hr></hr>
      <div className={styles.container}>
        {allTasks.map((task, index) => {
          return task.name === "Jeng Mun" &&
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
      <p>
        <h3>Completed</h3>
      </p>
      <hr></hr>
      <div className={styles.container}>
        {allTasks.map((task) => {
          return task.name === "Jeng Mun" && task.accepted && task.completed ? (
            <div key={uuidv4()}>
              <MyTasksCard task={task} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default Tasks;
