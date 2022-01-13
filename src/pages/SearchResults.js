import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SearchResults = () => {
  const [tasks, setTasks] = useState([]);
  const params = useParams();

  //================
  // Fetch data from API
  //================

  // const url = `http://localhost:5001/tasks`;

  // const fetchTasks = async () => {
  //   const res = await fetch(url, {
  //     // Accept: "application/json",
  //     // headers: { "Content-type": "text/html" },
  //   });
  //   const rawData = await res.json();

  //   setTasks(rawData);
  //   console.log(rawData);
  // };

  //================
  // Fetch data from API (by specific type)
  //================

  const url = `http://localhost:5001/tasks/${params.type}`;

  const fetchTasks = async () => {
    const res = await fetch(url, {});
    const rawData = await res.json();

    setTasks(rawData);
    console.log(rawData);
  };

  //===========

  useEffect(() => {
    // fetchTasks();
    fetchTasks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {tasks.map((tasks) => {
        return (
          <div key={uuidv4()}>
            <TaskCard tasks={tasks} />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
