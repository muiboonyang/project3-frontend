import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const TaskDetails = () => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [status, setStatus] = useState(null);
  const params = useParams();

  const fetchTaskDetails = async () => {
    const res = await fetch(
      `http://localhost:5001/search/${params.type}/${params.id}`
    );
    const data = await res.json();
    setTaskDetails(data);
    console.log(data);
  };

  const updateAcceptance = async () => {
    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.id,
        accepted: !status,
      }),
    });

    const data = await res.json();
    console.log(data);

    setStatus(!status);
  };

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  useEffect(() => {
    if (taskDetails) {
      setStatus(taskDetails.accepted);
    }
  }, [taskDetails]);

  const convertToDateFormat = (string) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const year = string.slice(0, 4);
    const month = months[string.slice(5, 7) - 1];
    const day = string.slice(8, 10);
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  };

  return (
    <div>
      {taskDetails ? (
        <Card>
          <Card.Title>{taskDetails.title}</Card.Title>
          <Card.Text>
            {taskDetails.type.charAt(0).toUpperCase() +
              taskDetails.type.slice(1)}
          </Card.Text>
          <a href={`mailto:${taskDetails.email}`}>{taskDetails.name}</a>
          <p>{taskDetails.contact}</p>
          <p>Date of request: {convertToDateFormat(taskDetails.date)}</p>
          <p>Required by: {convertToDateFormat(taskDetails.deadline)}</p>
          <p>Comments: {taskDetails.comments}</p>
          {taskDetails.completed ? (
            ""
          ) : (
            <Button type="submit" onClick={updateAcceptance}>
              {status ? "HELPED" : "HELP"}
            </Button>
          )}
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskDetails;
