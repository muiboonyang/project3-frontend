import React, { useState, useEffect, useContext } from "react";
import LoginContext from "../context/login-context";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./Profile.module.css";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const loginContext = useContext(LoginContext);

  //================
  // Fetch user data from API (by specific username)
  //================

  const currentUser = loginContext.profileName;
  const url = `http://localhost:5001/users/${currentUser}`;

  const getUserInfo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tab eventKey="1" title="Username">
          Username: {userInfo.username}
        </Tab>
        <Tab eventKey="2" title="Name">
          Name: {userInfo.name}
        </Tab>
        <Tab eventKey="3" title="Email">
          Email: {userInfo.email}
        </Tab>
        <Tab eventKey="4" title="Contact">
          Contact: {userInfo.contact}
        </Tab>
        <Tab eventKey="5" title="Address">
          Address: {userInfo.address}
        </Tab>
        <Tab eventKey="6" title="Unit">
          Unit: {userInfo.unit}
        </Tab>
        <Tab eventKey="7" title="Zip-code">
          Zip-code: {userInfo.zipcode}
        </Tab>
        <Tab eventKey="8" title="Reviews">
          {userInfo.reviews
            ? userInfo.reviews.map((review) => {
                return (
                  <div className={styles.reviewsContainer}>
                    <h3>{review.review}</h3>
                    <div>
                      <i className="fa fa-fw fa-user"></i>
                      <h6>{review.reviewer}</h6>
                    </div>
                  </div>
                );
              })
            : ""}
        </Tab>
      </Tabs>
    </>
  );
};

export default Profile;
