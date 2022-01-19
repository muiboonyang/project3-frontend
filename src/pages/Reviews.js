import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const params = useParams();
  const [userInfo, setUserInfo] = useState([]);

  //================
  // Fetch user data from API (by specific username)
  //================

  const url = `https://sei33-community-app.herokuapp.com/users/${params.username}`;

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
    <div className={styles.reviewsContainer}>
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
    </div>
  );
};

export default Reviews;
