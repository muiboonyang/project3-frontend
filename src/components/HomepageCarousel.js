import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./HomepageCarousel.module.css";

const HomepageCarousel = () => {
  return (
    <Carousel bsPrefix={styles.carousel}>
      <Carousel.Item interval={5000}>
        {/* <a href="/search/cleaning"> */}
        <img
          controls={false}
          fade="true"
          indicators="false"
          className="d-block w-100"
          src="https://www.borneomainland.com/wp-content/uploads/2021/08/3-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Find help with your cleaning needs!</h3>
          <p>
            Looking for assistance with house-keeping? Click here to explore all
            the options available!
          </p>
        </Carousel.Caption>
        {/* </a> */}
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        {/* <a href="/search/plumbing"> */}
        <img
          controls={false}
          fade="true"
          indicators="false"
          className="d-block w-100"
          src="https://www.thebestsingapore.com/wp-content/uploads/2017/09/plumbing-service-singapore-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Find help with your plumbing needs!</h3>
          <p>
            Looking for assistance with plumbing? Click here to explore all the
            options available!
          </p>
        </Carousel.Caption>
        {/* </a> */}
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        {/* <a href="/search/grocery"> */}
        <img
          controls={false}
          fade="true"
          indicators="false"
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Find help with your Grocery needs!</h3>
          <p>
            Looking for assistance with Groceries? Click here to explore all the
            options available!
          </p>
        </Carousel.Caption>
        {/* </a> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default HomepageCarousel;
