import React from "react";
import Hero from "../components/molecules/hero/Hero";

const Car = () => {
  return (
    <div>
      <div className="filter" id="filter" onClick="inactiveDarkBackground()" />
      {/* START HERO DESCRIPTION */}
      <Hero showbtn={false} />
      {/* END HERO DESCRIPTION */}
      {/* STAR SEARCH BUTTON */}
      <div
        id="search"
        className="container position-relative"
        style={{ zIndex: 2 }}
      >
        <div
          id="searchColumn"
          className="card-search card p-3"
          onclick="activeDarkBackground()"
        >
          <div className="row">
            <div className="col-lg-2 col-sm-6 col-12">
              <div>
                <label htmlFor>Tipe Driver</label>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pilih Tipe Driver
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Dengan Sopir
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tanpa Sopir (Lepas Kunci)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-12">
              <label htmlFor="inputDate">Tanggal</label>
              <input
                id="inputDate"
                className="form-control"
                type="date"
                placeholder
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12  form-group has-feedback">
              <label htmlFor="inputTime">Waktu Jemput/ Ambil</label>
              <input
                step={1}
                id="inputTime"
                className="form-control"
                type="time"
                placeholder="Pilih Waktu"
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <label htmlFor="startDate">Jumlah Penumpang</label>
              <div className="input-group mb-3">
                <input
                  id="jumlahPenumpang"
                  type="number"
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  aria-placeholder="Pilih Waktu"
                />
              </div>
            </div>
            <div className="col-lg-2 col-sm-12 col-12 d-flex justify-content-center align-self-center">
              <button id="submitBtn" className="btn-rent-car w-100">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END SEARCH BUTTON */}
      {/* START LIST CAR */}
      <div className="container mt-4">
        <div
          id="cars-container"
          className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3"
        ></div>
      </div>
      {/* END LIST CAR */}
      {/* START FOOTER */}
      <div id="footer" className="container my-5">
        <div className="row d-flex justify-content-between">
          <div id="address" className="col-lg-3 col-md-6 col-12">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div id="fiture" className="col-lg-3 col-md-6 col-12">
            <a
              href="#serv"
              className="text-decoration-none fw-bold mb-3 d-block"
            >
              Our services
            </a>
            <a
              href="#why"
              className="text-decoration-none fw-bold mb-3 d-block"
            >
              Why Us
            </a>
            <a
              href="#testimonial"
              className="text-decoration-none fw-bold mb-3 d-block"
            >
              Testimonial
            </a>
            <a
              href="#FAQ"
              className="text-decoration-none fw-bold mb-3 d-block"
            >
              FAQ
            </a>
          </div>
          <div id className="col-lg-3 col-md-6 col-12 mb-2">
            <p>Connect with us</p>
            <div className="social-media">
              <a href="https://www.facebook.com/binaracademy/">
                <img src="./assets/icon_facebook.png" alt="" />
              </a>
              <a href="https://www.instagram.com/academybinar/?hl=en">
                <img src="./assets/icon_instagram.png" alt="" />
              </a>
              <a href="https://twitter.com/academybinar">
                <img src="./assets/icon_twitter.png" alt="" />
              </a>
              <a href="mailto:binarcarrental@gmail.com">
                <img src="./assets/icon_mail.png" alt="" />
              </a>
              <a href="https://www.twitch.tv/binary_studio_academy">
                <img src="./assets/icon_twitch.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <p>Copyright Binar 2022</p>
            <div className="navbar-brand logo text-center text-white">
              YUNEDA
            </div>
          </div>
        </div>
      </div>
      {/* END FOOTER */}
    </div>
  );
};

export default Car;
