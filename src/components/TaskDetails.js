import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./TaskDetails.module.css";

const TaskDetails = () => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [status, setStatus] = useState(null);
  const [location, setLocation] = useState(null);
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
      mode: "cors",
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

  const getLocation = async () => {
    const res = await fetch(
      `https://developers.onemap.sg/commonapi/search?searchVal=${taskDetails.zipcode}&returnGeom=Y&getAddrDetails=Y`
    );
    const data = await res.json();
    setLocation(data.results[0]);
  };

  useEffect(() => {
    fetchTaskDetails();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (taskDetails) {
      setStatus(taskDetails.accepted);
      getLocation();
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
    <>
      {taskDetails ? (
        <div className={styles.container}>
          <div className={styles.detailsContainer}>
            <h5>{taskDetails.title}</h5>
            <div className={styles.subheading}>
              <h6>
                {taskDetails.type.charAt(0).toUpperCase() +
                  taskDetails.type.slice(1)}
              </h6>
              <h6>{convertToDateFormat(taskDetails.date)}</h6>
            </div>

            <img
              src={`http://localhost:5001/${taskDetails.image}`}
              alt={`${taskDetails.title}`}
            />

            <p>Required by: {convertToDateFormat(taskDetails.deadline)}</p>
            <div className={styles.details}>
              <h6>About this request:</h6>
              {taskDetails.comments}
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.contactContainer}>
              <p> {taskDetails.name}</p>
              <a href={`mailto:${taskDetails.email}`}>
                <div>Chat</div>
              </a>
              {taskDetails.completed ? (
                ""
              ) : (
                <Button
                  variant="outline-info"
                  type="submit"
                  onClick={updateAcceptance}
                >
                  {status ? "Helping Out" : "Help Out"}
                </Button>
              )}
            </div>
            {location ? (
              <img
                src={`https://developers.onemap.sg/commonapi/staticmap/getStaticImage?layerchosen=night&postal=${taskDetails.zipcode}&zoom=16&height=200&width=200&points=[${location.LATITUDE}, ${location.LONGITUDE},"255,255,255"]&color=&fillColor=`}
              ></img>
            ) : (
              <p>Please contact requestor for updated location</p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TaskDetails;
