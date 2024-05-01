import React from "react";
import { Carousel } from 'react-bootstrap';
import carousel3 from "../images/carousel_3.jpg";
import carousel1 from "../images/carousel_1.jpg";
import carousel2 from "../images/carousel_2.jpeg";

function MyCarousel() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={carousel2}
          alt="First slide"
          style={{ objectFit: "cover", height: "100vh" }}
        />
        <Carousel.Caption style={{ background: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px" }}>
          <h4 style={{ color: "white" }}>100% Fresh And Organic</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={carousel1}
          alt="Second slide"
          style={{ objectFit: "cover", height: "100vh" }}
        />

        <Carousel.Caption style={{ background: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px" }}>
        <h4 style={{ color: "white" }}>Eat Fresh Stay Healthy!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={carousel3}
          alt="Third slide"
          style={{ objectFit: "cover", height: "100vh" }}
        />
        <Carousel.Caption style={{ background: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px" }}>
        <h4 style={{ color: "white" }}>Get Your Groceries Delivered at your doorstep</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
