import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SearchCard.module.css";

const SearchCard = (props) => {
  return (
    <div className={styles.container}>
      <NavLink to={`${props.requests.type}/${props.requests._id}`}>
        <div className={styles.detailsContainer}>
          <img
            src={
              props.requests.image.startsWith("http")
                ? props.requests.image
                : `http://localhost:5001/${props.requests.image}`
            }
            alt={`${props.requests.title}`}
          />
          <div>
            <h6>{props.requests.name}</h6>
            <h3>{props.requests.title}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SearchCard;
