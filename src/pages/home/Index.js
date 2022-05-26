import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Carousel from "../../components/carousel/Carousel";
import Why from "../../components/why/Why";
import Banner from "../../components/banner/Banner";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

const Index = () => {
  return (
    <>
      {/* START NAVBAR */}
      <Navbar fix={true} />
      {/* Offcanvas for sidebar */}
      <Sidebar />
      {/* END NAVBAR */}
      {/* START HERO DESCRIPTION */}
      <Hero showbtn={true} />
      {/* END HERO DESCRIPTION */}
      {/* START OUR SERVICES */}
      <Services />
      {/* END OUR SERVICES */}
      {/* START WHY US */}
      <Why />
      {/* END WHY US */}
      {/* START OWL CAROUSEL */}

      {<Carousel />}
      {/* END OWL CAROUSEL */}
      {/* START BANNER */}
      <Banner />
      {/* END BANNER */}
      {/* START FAQ */}
      <Faq />
      {/* END FAQ */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
};

export default Index;
