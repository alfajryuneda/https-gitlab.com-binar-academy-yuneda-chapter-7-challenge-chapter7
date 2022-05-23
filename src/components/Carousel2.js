import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardCarousel from "./CardCarousel";

const options = {
  items: 4,
};
class Hello extends React.Component {
  render() {
    return (
      <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={32}
        nav={true}
        center={true}
        dots={false}
        navText={[
          "<img src='assets/left-button.png' alt='kanan'>",
          "<img src='assets/right-button.png' alt='kanan'>",
        ]}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 2,
          },
        }}
      >
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
      </OwlCarousel>
    );
  }
}

export default Hello;
