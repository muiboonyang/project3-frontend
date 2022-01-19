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
              src="https://images.pexels.com/photos/4474005/pexels-photo-4474005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Seek Help"
            />

            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Seek Help</h3>
              <p>
                Ask help from others{" "}
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                <br />
                Click here to create an account!
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
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Business"
            />

            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Business</h3>
              <p>
                Want to make someone's day?{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
                <br />
                Click here to begin!
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
              src="https://images.pexels.com/photos/9756161/pexels-photo-9756161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Lifestyle"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Lifestyle</h3>
              <p>
                Want to make someone's day?{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
                <br />
                Click here to begin!
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
              src="https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Home Services"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Home Services</h3>
              <p>
                Want to make someone's day?{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
                <br />
                Click here to begin!
              </p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomepageCarousel;
