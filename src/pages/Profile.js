import React, { useState, useEffect, useContext } from "react";
import LoginContext from "../context/login-context";
// import styles from "./Profile.module.css";

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
      Username: {userInfo.username} <br />
      <br />
      Name: {userInfo.name} <br />
      Email: {userInfo.email} <br />
      Contact: {userInfo.contact} <br />
      Address: {userInfo.address} <br />
      Unit: {userInfo.unit} <br />
      Zip Code: {userInfo.zipcode} <br />
    </>
  );
};

export default Profile;
