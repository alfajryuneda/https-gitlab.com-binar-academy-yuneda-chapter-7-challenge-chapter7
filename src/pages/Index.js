import React from "react";

const Index = () => {
  return (
    <>
      <div className="hero fixed-top bg-light">
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
                  <li className="nav-item  ms-2 mt-2">
                    <a
                      href="/cars"
                      className="btn-rent-car text-decoration-none"
                    >
                      Register
                    </a>
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
              <a href="/cars" className="btn-rent-car">
                Register
              </a>
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
            <a href="/cars" className="btn-rent-car text-decoration-none">
              Mulai Sewa Mobil
            </a>
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
      {/* START OUR SERVICES */}
      <div id="serv" className="container mt-5 pt-5">
        <div className="row justify-content-around pt-4">
          <div className="col-lg-6">
            <img className="img-fluid" src="./assets/service.png" alt="" />
          </div>
          <div className="col-lg-6 services-right mt-5">
            <h2 className="fw-bold">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="services mb-3">
              <img src="./assets/cek.png" className="me-4" alt="" />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </div>
            <div className="services mb-3">
              <img src="./assets/cek.png" className="me-4" alt="" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </div>
            <div className="services mb-3">
              <img src="./assets/cek.png" className="me-4" alt="" />
              Sewa Mobil Jangka Panjang Bulanan
            </div>
            <div className="services mb-3">
              <img src="./assets/cek.png" className="me-4" alt="" />
              Gratis Antar - Jemput Mobil di Bandara
            </div>
            <div className="services mb-3">
              <img src="./assets/cek.png" className="me-4" alt="" />
              Layanan Airport Transfer / Drop In Out
            </div>
          </div>
        </div>
      </div>
      {/* END OUR SERVICES */}
      {/* START WHY US */}
      <div id="why" className="container mt-5 pt-5">
        <div className="why-header pt-4">
          <h2 className="fw-bold">Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <img src="./assets/icon_complete.png" className="mb-3" alt="" />
                <h5 className="mb-3 fw-bold">Mobil Lengkap</h5>
                <p className>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <img src="./assets/icon_price.png" className="mb-3" alt="" />
                <h5 className="mb-3 fw-bold">Harga Murah</h5>
                <p className>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <img src="./assets/icon_24hrs.png" className="mb-3" alt="" />
                <h5 className="mb-3 fw-bold">Layanan 24 Jam</h5>
                <p className>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <img
                  src="./assets/icon_professional.png"
                  className="mb-3"
                  alt=""
                />
                <h5 className="mb-3 fw-bold">Sopir Profesional</h5>
                <p className>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END WHY US */}
      {/* START BANNER */}
      <div className="container mt-5">
        <div
          id="banner"
          className="p-5 d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className="mt-4 mb-2 text-white fw-bold text-center">
            Sewa Mobil di Sidoarjo Sekarang
          </h1>
          <p className="text-white text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/cars" className="btn-rent-car mb-4 text-decoration-none">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
      {/* END BANNER */}
      {/* START FAQ */}
      <div id="FAQ" className="container mt-5 pt-5">
        <div className="row pt-4">
          <div className="col-lg-6 col-12">
            <h2 className="fw-bold">Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="accordion mb-3"
              id="accordionPanelsStayOpenExample"
              style={{ maxWidth: "668px" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion mb-3"
              id="accordionPanelsStayOpenExample"
              style={{ maxWidth: "668px" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion mb-3"
              id="accordionPanelsStayOpenExample"
              style={{ maxWidth: "668px" }}
            >
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion mb-3"
              id="accordionPanelsStayOpenExample"
              style={{ maxWidth: "668px" }}
            >
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion mb-3"
              id="accordionPanelsStayOpenExample"
              style={{ maxWidth: "668px" }}
            >
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FAQ */}
      {/* START FOOTER */}
      <div className="container my-5">
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
    </>
  );
};

export default Index;
