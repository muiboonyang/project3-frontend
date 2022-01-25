import React, { useState, useEffect, useContext } from "react";
import MyTasksCard from "../components/MyTasksCard";
import LoginContext from "../context/login-context";
import { v4 as uuidv4 } from "uuid";
import styles from "./MyTasks.module.css";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const loginContext = useContext(LoginContext);

  const fetchAllTasks = async () => {
    try {
      const res = await fetch(
        "https://sei33-community-app.herokuapp.com/search/all"
      );
      const data = await res.json();
      const filteredData = data.filter((item) => {
        return item.username === loginContext.profileName;
      });
      setAllTasks(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const completeTask = async (identifier, index) => {
    try {
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

      allTasks[index].completed = true;
      setAllTasks([...allTasks]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitReview = async (identifier, input, acceptedBy, index) => {
    try {
      const res = await fetch(
        "https://sei33-community-app.herokuapp.com/addreview",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: identifier,
            review: input,
            reviewer: loginContext.profileName,
            acceptedBy: acceptedBy,
          }),
        }
      );
      const data = await res.json();

      allTasks[index].review = input;
      setAllTasks([...allTasks]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.myTasks}>
        <h1>My Tasks</h1>

        <h4>In Progress</h4>

        <div className={styles.container}>
          {allTasks.map((task, index) => {
            return !task.completed ? (
              <div key={uuidv4()}>
                <MyTasksCard
                  task={task}
                  completeTask={() => {
                    completeTask(task._id, index);
                  }}
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
            return task.completed ? (
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
            return !task.accepted ? (
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
            return task.accepted && !task.completed ? (
              <div key={uuidv4()} className={styles.container}>
                <MyTasksCard
                  task={task}
                  completeTask={() => {
                    completeTask(task._id, index);
                  }}
                />
              </div>
            ) : (
              ""
            );
          })}
        </div>

        <h4>Completed</h4>
        <div className={styles.container}>
          {allTasks.map((task, index) => {
            return task.accepted && task.completed ? (
              <div key={uuidv4()}>
                <MyTasksCard
                  task={task}
                  handleSubmitReview={(identifier, input, acceptedBy) => {
                    handleSubmitReview(identifier, input, acceptedBy, index);
                  }}
                />
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
