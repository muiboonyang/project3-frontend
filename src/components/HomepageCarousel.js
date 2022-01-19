import React from "react";
import styles from "./HomepageCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";

const HomepageCarousel = () => {
  return (
    <>
      <Carousel className={styles.carousel}>
        <Carousel.Item interval={5000}>
          <img
            controls={false}
            fade="true"
            indicators="false"
            className="d-block w-100"
            src="https://i.picsum.photos/id/1048/5616/3744.jpg?hmac=N5TZKe4gtmf4hU8xRs-zbS4diYiO009Jni7n50609zk"
            alt="Lifestyle"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3>Find help for your cleaning needs!</h3>
            <p>
              Looking for assistance with house-keeping? <br />
              Explore the options above!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            controls={false}
            fade="true"
            indicators="false"
            className="d-block w-100"
            src="https://i.picsum.photos/id/1049/3900/3120.jpg?hmac=Ox2snaSyRuEofh721sagxPbwVzLtung57FNHefB8Kdw"
            alt="Business"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3>Find help for your plumbing needs!</h3>
            <p>
              Looking for assistance with plumbing? <br />
              Explore the options above!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            controls={false}
            fade="true"
            indicators="false"
            className="d-block w-100"
            src="https://i.picsum.photos/id/1050/6000/4000.jpg?hmac=HhCXFcOrIrNguK7GqP6VhICXPa5FmcLZdug505qiEZM"
            alt="Home Services"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3>Find help for your grocery needs!</h3>
            <p>
              Looking for assistance with Groceries? <br />
              Explore the options above!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomepageCarousel;
