import React from "react";
import Button from "react-bootstrap/Button";
// import styles from "./Home.module.css";

const Home = () => {
  const seedTask = async () => {
    try {
      await fetch(`http://localhost:5001/seedtask`);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTasks = async () => {
    try {
      await fetch(`http://localhost:5001/delete/alltask`);
    } catch (err) {
      console.log(err);
    }
  };

  const seedUser = async () => {
    try {
      await fetch(`http://localhost:5001/seeduser`);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUsers = async () => {
    try {
      await fetch(`http://localhost:5001/delete/alluser`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <h3>Home</h3>
      <br />
      <Button onClick={seedTask} variant="primary" type="submit">
        Seed Tasks
      </Button>
      <br /> <br />
      <Button onClick={deleteTasks} variant="danger" type="submit">
        DELETE ALL TASKS
      </Button>
      <br /> <br />
      <Button onClick={seedUser} variant="success" type="submit">
        Seed Users
      </Button>
      <br /> <br />
      <Button onClick={deleteUsers} variant="danger" type="submit">
        DELETE ALL USERS
      </Button>
    </div>
  );
};

export default Home;
