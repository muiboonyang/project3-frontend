
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import CardTask from "../components/CardTask";
=======
>>>>>>> main
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Row from "react-bootstrap/Row";
import SearchCard from "../components/SearchCard.js";
// import styles from "./SearchResults.module.css";

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
    fetchRequests();
    // eslint-disable-next-line
  }, []);

  return (
    <Row md={"auto"} className="g-4">
      {requests.map((requests) => {
        return (
          <div key={uuidv4()}>
<<<<<<< HEAD

            <CardTask requests={requests} />           

            <br />
=======
            <SearchCard requests={requests} />
>>>>>>> main
          </div>
        );
      })}
    </Row>
  );
};

export default SearchResults;
