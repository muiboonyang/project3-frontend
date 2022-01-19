import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Home.module.css";
import HomepageCarousel from "../components/HomepageCarousel";

const Home = () => {
  const seedTask = async () => {
    try {
      await fetch(`https://sei33-community-app.herokuapp.com/seedtask`);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTasks = async () => {
    try {
      await fetch(`https://sei33-community-app.herokuapp.com/delete/alltask`);
    } catch (err) {
      console.log(err);
    }
  };

  const seedUser = async () => {
    try {
      await fetch(`https://sei33-community-app.herokuapp.com/seeduser`);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUsers = async () => {
    try {
      await fetch(`https://sei33-community-app.herokuapp.com/delete/alluser`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="carousel">
        <HomepageCarousel></HomepageCarousel>
      </div>

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
    </>
  );
};

export default Home;
