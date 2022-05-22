import React from "react";

const Car = () => {
  return (
    <div>
      <div className="filter" id="filter" onClick="inactiveDarkBackground()" />
      {/* START NAVBAR */}
      <div className="hero ">
        <div className="container py-1">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand logo text-white text-center" href="#">
                YUNEDA
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#serv"
                    >
                      <span>Our Services</span>
                    </a>
                  </li>
                  <li className="nav-item  ms-2">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#why"
                    >
                      <span>Why Us</span>
                    </a>
                  </li>
                  <li className="nav-item  ms-2">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#testimonial"
                    >
                      <span>Testimonial</span>
                    </a>
                  </li>
                  <li className="nav-item  ms-2">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#FAQ"
                    >
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li className="nav-item  ms-2">
                    <button className="btn-rent-car">Register</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Offcanvas for sidebar */}
      <div
        className="offcanvas offcanvas-end w-50"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header pb-0">
          <h5 id="offcanvasRightLabel" className="mt-2 fw-bold">
            BCR
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body pt-0">
          <ul className="navbar-nav pt-0">
            <li className>
              <a className="nav-link active" aria-current="page" href="#serv">
                <span className="text-black">Our Services</span>
              </a>
            </li>
            <li className>
              <a className="nav-link" href="#why">
                <span className="text-black">Why Us</span>
              </a>
            </li>
            <li className>
              <a className="nav-link" href="#testimonial">
                <span className="text-black">Testimonial</span>
              </a>
            </li>
            <li className>
              <a className="nav-link" href="#FAQ">
                <span className="text-black">FAQ</span>
              </a>
            </li>
            <li className>
              <button className="btn-rent-car">Register</button>
            </li>
          </ul>
        </div>
      </div>
      {/* END NAVBAR */}
      {/* START HERO DESCRIPTION */}
      <div className="hero" style={{ marginTop: "64px" }}>
        <div className="row ms-2">
          <div className="col-lg-1 col-0 ps-0 ms-0" />
          <div className="col-lg-5 col-sm-12 hero-desc">
            <h1 className="fs-1">
              Sewa &amp; Rental Mobil Terbaik di kawasan Sidoarjo
            </h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="btn-rent-car">Mulai Sewa Mobil</button>
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
