import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import SearchColumn from "../../components/searchcolumn/SearchColumn";

const SearchPage = () => {
  return (
    <div>
      {/* START NAVBAR */}
      <Navbar fix={false} />
      {/* Offcanvas for sidebar */}
      <Sidebar />
      {/* END NAVBAR */}
      {/* START HERO DESCRIPTION */}
      <Hero showbtn={false} />
      {/* END HERO DESCRIPTION */}
      {/* STAR SEARCH BUTTON */}
      <SearchColumn />
      {/* END SEARCH BUTTON */}
      {/* START LIST CAR */}
      {/* <ListCar /> */}
      {/* END LIST CAR */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </div>
  );
};

export default SearchPage;
