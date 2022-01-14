import React from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="seedData">
      Home
      <form
        action="http://localhost:5001/seed"
        method="post"
        className="form-submit"
      >
        <br />
        <Button variant="primary" type="submit">
          Seed data
        </Button>
        <br />
        <br />
      </form>
      <form
        action="http://localhost:5001/delete/all"
        method="post"
        className="form-submit"
      >
        <br />
        <Button variant="danger" type="submit">
          DELETE ALL DATA
        </Button>
      </form>
    </div>
  );
};

export default Home;
