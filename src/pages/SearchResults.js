<<<<<<< Updated upstream
import React from "react";

const SearchResults = () => {
  return <div>Search</div>;
=======
import React, { useState, useEffect } from "react";
import CardTask from "../components/CardTask";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SearchResults = () => {
  const [requests, setRequests] = useState([]);
  const params = useParams();

  //================
  // Fetch data from API (by specific type)
  //================

  const url = `http://localhost:5001/search/${params.type}`;

  const fetchRequests = async () => {
    const res = await fetch(url, {});
    const rawData = await res.json();
    setRequests(rawData);
  };

  //===========

  useEffect(() => {
    // fetchTasks();
    fetchRequests();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {requests.map((requests) => {
        return (
          <div key={uuidv4()}>
            <CardTask requests={requests} />
            <br />
          </div>
        );
      })}
    </>
  );
>>>>>>> Stashed changes
};

export default SearchResults;
