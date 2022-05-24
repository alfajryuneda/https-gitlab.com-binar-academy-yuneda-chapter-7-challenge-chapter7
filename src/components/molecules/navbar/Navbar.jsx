import React from "react";

const Navbar = () => {
  return (
    <div className="hero fixed-top bg-light">
      <div className="container py-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand logo text-white text-center">YUNEDA</a>
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
                  <a href="/cars" className="btn-rent-car text-decoration-none">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
