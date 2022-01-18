import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Home.module.css";
import HomepageCarousel from "../components/HomepageCarousel";

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
    <>
      <div className="carousel">
        <HomepageCarousel></HomepageCarousel>
      </div>
      <br />
      <br />
      <div className={styles.buttons}>
        <Button onClick={seedTask} variant="dark" type="submit" size="sm">
          Seed Tasks
        </Button>{" "}
        <Button onClick={deleteTasks} variant="danger" type="submit" size="sm">
          Delete Tasks
        </Button>{" "}
        <Button onClick={seedUser} variant="dark" type="submit" size="sm">
          Seed Users
        </Button>{" "}
        <Button onClick={deleteUsers} variant="danger" type="submit" size="sm">
          Delete Users
        </Button>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
