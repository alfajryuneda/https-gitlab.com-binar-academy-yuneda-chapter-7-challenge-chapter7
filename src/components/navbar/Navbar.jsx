import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  let navStyle = "";
  if (props.fix === true) {
    navStyle = "hero fixed-top bg-light";
  } else {
    navStyle = "hero";
  }
  return (
    <div className={navStyle}>
      <div className="container py-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/">
              <button className="home-logo">YUNEDA</button>
            </Link>
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
                    className="nav-link active text-nav"
                    aria-current="page"
                    href="#services"
                  >
                    <span>Our Services</span>
                  </a>
                </li>
                <li className="nav-item  ms-2">
                  <a
                    className="nav-link active text-nav"
                    aria-current="page"
                    href="#why"
                  >
                    <span>Why Us</span>
                  </a>
                </li>
                <li className="nav-item  ms-2">
                  <a
                    className="nav-link active text-nav"
                    aria-current="page"
                    href="#testimonial"
                  >
                    <span>Testimonial</span>
                  </a>
                </li>
                <li className="nav-item  ms-2">
                  <a
                    className="nav-link active text-nav"
                    aria-current="page"
                    href="#FAQ"
                  >
                    <span>FAQ</span>
                  </a>
                </li>
                <li className="nav-item  ms-2 ">
                  <Link to="/register">
                    <button className="btn-rent-car text-decoration-none">
                      Register
                    </button>
                  </Link>
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
