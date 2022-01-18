import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SearchCard from "../components/SearchCard.js";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  const [requests, setRequests] = useState([]);
  const params = useParams();

  //================
  // Fetch data from API (by specific type)
  //================

  const url = `http://localhost:5001/search/${params.type}`;

  const fetchRequests = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setRequests(data);
  };

  //===========

  useEffect(() => {
    fetchRequests();
    // eslint-disable-next-line
  }, [params.type]);

  return (
    <div className={styles.container}>
      {requests.map((requests) => {
        return (
          <div key={uuidv4()}>
            <SearchCard requests={requests} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
