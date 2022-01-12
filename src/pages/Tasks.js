import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  //================
  // Fetch data from API
  //================

  const url = `http://localhost:5001/tasks`;

  const fetchTasks = async () => {
    const res = await fetch(url, {
      // Accept: "application/json",
      // headers: { "Content-type": "text/html" },
    });
    const rawData = await res.json();

    setTasks(rawData);
    console.log(rawData);
  };

  //===========

  useEffect(() => {
    fetchTasks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {tasks.map((tasks) => {
        return (
          <>
            <TaskCard tasks={tasks} />
            <br />
          </>
        );
      })}
    </>
  );
};

export default Tasks;
