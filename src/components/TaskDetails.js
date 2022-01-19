import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import LoginContext from "../context/login-context";
import styles from "./TaskDetails.module.css";
import Button from "react-bootstrap/Button";

const TaskDetails = () => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [status, setStatus] = useState(null);
  const [location, setLocation] = useState(null);
  const loginContext = useContext(LoginContext);
  const params = useParams();

  const fetchTaskDetails = async () => {
    const res = await fetch(
      `https://sei33-community-app.herokuapp.com/search/${params.type}/${params.id}`
    );
    const data = await res.json();
    setTaskDetails(data);
  };

  const updateAcceptance = async () => {
    const res = await fetch("https://sei33-community-app.herokuapp.com/tasks", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.id,
        accepted: !status,
        acceptedBy: status ? "" : loginContext.profileName,
      }),
    });

    const data = await res.json();
    console.log(data);
    setStatus(!status);
  };

  const getLocation = async () => {
    try {
      const res = await fetch(
        `https://developers.onemap.sg/commonapi/search?searchVal=${taskDetails.zipcode}&returnGeom=Y&getAddrDetails=Y`
      );
      const data = await res.json();
      setLocation(data.results[0]);
    } catch (err) {
      console.error(err);
    }
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
    // eslint-disable-next-line
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
              src={
                taskDetails.image.startsWith("http")
                  ? taskDetails.image
                  : `https://sei33-community-app.herokuapp.com/${taskDetails.image}`
              }
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
              <NavLink to={`/${taskDetails.username}/reviews`}>
                <p> {taskDetails.name}</p>
              </NavLink>
              <a href={`mailto:${taskDetails.email}`}>
                <div>Chat</div>
              </a>

              {taskDetails.completed ? (
                ""
              ) : loginContext.loggedIn ? (
                (!taskDetails.acceptedBy ||
                  taskDetails.acceptedBy === loginContext.profileName) &&
                taskDetails.username !== loginContext.profileName ? (
                  <Button
                    variant="outline-info"
                    type="submit"
                    onClick={updateAcceptance}
                  >
                    {status ? "Helping Out" : "Help Out"}
                  </Button>
                ) : (
                  ""
                )
              ) : (
                <NavLink to="/login">
                  <Button variant="outline-info">Help Out</Button>
                </NavLink>
              )}
            </div>

            {location ? (
              <img
                src={`https://developers.onemap.sg/commonapi/staticmap/getStaticImage?layerchosen=default&postal=${taskDetails.zipcode}&zoom=16&height=200&width=200&points=[${location.LATITUDE}, ${location.LONGITUDE},"204,100,100"]&color=&fillColor=`}
                alt=""
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
