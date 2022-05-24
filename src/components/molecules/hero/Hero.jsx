import React from "react";

const Hero = ({ showbtn }) => {
  return (
    <div className="hero" style={{ marginTop: "64px" }}>
      <div className="row ms-2">
        <div className="col-lg-1 col-0 ps-0 ms-0" />
        <div className="col-lg-5 col-sm-12 hero-desc">
          <h1 className="fs-1">
            Sewa &amp; Rental Mobil Terbaik di kawasan Sidoarjo
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {showbtn && (
            <a href="/cars" className="btn-rent-car text-decoration-none">
              Mulai Sewa Mobil
            </a>
          )}
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            id="car"
            src="./assets/img_car.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
