import React from "react";
import Button from "react-bootstrap/Button";
// import styles from "./Home.module.css";
import HomepageCarousel from "../components/HomepageCarousel";

const Home = () => {
  return (
    <div className="seedData">
      Home
      <br />
      <HomepageCarousel></HomepageCarousel>
      <br />
      <br /> <br />
      <form
        action="http://localhost:5001/seedtask"
        method="post"
        className="form-submit"
      >
        <Button variant="primary" type="submit">
          Seed Tasks
        </Button>
      </form>
      <br />
      <form
        action="http://localhost:5001/delete/alltask"
        method="post"
        className="form-submit"
      >
        <Button variant="danger" type="submit">
          DELETE ALL TASKS
        </Button>
      </form>
      <br />
      <br />
      <form
        action="http://localhost:5001/seeduser"
        method="post"
        className="form-submit"
      >
        <Button variant="success" type="submit">
          Seed Users
        </Button>
      </form>
      <br />
      <form
        action="http://localhost:5001/delete/alluser"
        method="post"
        className="form-submit"
      >
        <Button variant="danger" type="submit">
          DELETE ALL USERS
        </Button>
      </form>
    </div>
  );
};

export default Home;
