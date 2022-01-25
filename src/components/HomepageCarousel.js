import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomepageCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";

const HomepageCarousel = () => {
  return (
    <>
      <Carousel className={styles.carousel}>
        <Carousel.Item interval={5000}>
          <NavLink to="/register">
            <img
              controls={false}
              fade="true"
              indicators="false"
              className="d-block w-100"
              src="https://picsum.photos/id/504/1920/1080
              "
              alt="Seek Help"
            />

            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Seek Help</h3>
              <p>
                Ask help from others{" "}
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                <br />
                Create an account to begin!
              </p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <NavLink to="/search/business">
            <img
              controls={false}
              fade="true"
              indicators="false"
              className="d-block w-100"
              src="https://picsum.photos/id/513/1920/1080
              "
              alt="Business"
            />

            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Support Businesses</h3>
              <p>
                Want to make someone's day?{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
                <br />
                Click to begin!
              </p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <NavLink to="/search/lifestyle">
            <img
              controls={false}
              fade="true"
              indicators="false"
              className="d-block w-100"
              src="https://picsum.photos/id/304/1920/1080
              "
              alt="Lifestyle"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Lifestyle Tasks</h3>
              <p>
                Want to make someone's day?{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
                <br />
                Click to begin!
              </p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <NavLink to="/search/homeservices">
            <img
              controls={false}
              fade="true"
              indicators="false"
              className="d-block w-100"
              src="https://picsum.photos/id/284/1920/1080
              "
              alt="Home Services"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Home Services</h3>
              <p>
                Want to make someone's day?{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
                <br />
                Click to begin!
              </p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomepageCarousel;
