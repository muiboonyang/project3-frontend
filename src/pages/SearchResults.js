import React, { useState, useEffect } from "react";
import Card from "../components/Card";
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
            <Card requests={requests} />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
