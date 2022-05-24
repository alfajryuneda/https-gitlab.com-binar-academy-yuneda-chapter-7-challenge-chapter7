import React from "react";
import Navbar from "../components/molecules/navbar/Navbar";
import Sidebar from "../components/molecules/sidebar/Sidebar";
import Hero from "../components/molecules/hero/Hero";
import Services from "../components/molecules/services/Services";
import Carousel from "../components/molecules/carousel/Carousel";
import Why from "../components/molecules/why/Why";
import Banner from "../components/molecules/banner/Banner";
import Faq from "../components/molecules/faq/Faq";
import Footer from "../components/molecules/footer/Footer";

const Index = () => {
  return (
    <>
      {/* START NAVBAR */}
      <Navbar />
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
      <div
        className="container mt-5 pt-5 d-flex flex-column justify-content-center"
        id="testimonial"
      >
        <h2 className="text-center mb-3 fw-bold pt-4">Testimonial</h2>
        <p className="text-center mb-4">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>
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
