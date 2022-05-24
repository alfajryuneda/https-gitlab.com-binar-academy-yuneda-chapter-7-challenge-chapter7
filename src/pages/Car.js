import React from "react";
import Footer from "../components/molecules/footer/Footer";
import Hero from "../components/molecules/hero/Hero";
import ListCar from "../components/molecules/searchcolumn/ListCar";
import SearchColumn from "../components/molecules/searchcolumn/SearchColumn";

const Car = () => {
  return (
    <div>
      {/* START HERO DESCRIPTION */}
      <Hero showbtn={false} />
      {/* END HERO DESCRIPTION */}
      {/* STAR SEARCH BUTTON */}
      <SearchColumn />
      {/* END SEARCH BUTTON */}
      {/* START LIST CAR */}
      <ListCar />
      {/* END LIST CAR */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </div>
  );
};

export default Car;
