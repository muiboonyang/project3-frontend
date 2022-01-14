import React, { useState, useEffect } from "react";
import MyTasksCard from "../components/MyTasksCard";

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
    const res = await fetch("http://localhost:5001/complete", {
      method: "POST",
      // mode: "cors",
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

      <h1>My Tasks</h1>

      <h3>In Progress</h3>
      {allTasks.map((task, index) => {
        return task.accepted && !task.completed ? (
          <>
            <MyTasksCard
              task={task}
              index={index}
              completeTask={completeTask}
            />
          </>
        ) : (
          ""
        );
      })}

      <h3>Completed</h3>
      {allTasks.map((task) => {
        return task.accepted && task.completed ? (
          <>
            <MyTasksCard task={task} />
          </>
        ) : (
          ""
        );
      })}

      <h1>My Requests</h1>

      <h3>Pending Acceptance</h3>
      {allTasks.map((task) => {
        return task.name === "Jeng Mun" && !task.accepted ? (
          <MyTasksCard task={task} />
        ) : (
          ""
        );
      })}

      <h3>In Progress</h3>
      {allTasks.map((task, index) => {
        return task.name === "Jeng Mun" && task.accepted && !task.completed ? (
          <MyTasksCard task={task} index={index} completeTask={completeTask} />
        ) : (
          ""
        );
      })}

      <h3>Completed</h3>
      {allTasks.map((task) => {
        return task.name === "Jeng Mun" && task.accepted && task.completed ? (
          <MyTasksCard task={task} />
        ) : (
          ""
        );
      })}

    </div>
  );
};

export default Tasks;
