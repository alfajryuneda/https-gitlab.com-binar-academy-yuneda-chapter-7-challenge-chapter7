import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./Login";
import Logout from "./Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
const clientId =
  "462146044158-2fsqfmi1ag1kumnf2n4ld97ac529j7c3.apps.googleusercontent.com";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const styleCard = {
    textAlign: "left",
  };
  const imgStyle = {
    maxWidth: "100px",
    margin: "auto",
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client", start);
  });
  const handlerStateLogin = (name, email) => {
    setLogin(true);
    setName(name);
    setEmail(email);
  };
  const handlerStateLogout = () => {
    setLogin(false);
  };
  return (
    <>
      <div className="container-fluid">
        <div style={{ maxHeight: "100px" }}>
          <Navbar fix={true} />
          <Sidebar />
        </div>
      </div>
      <div className="container" style={{ marginTop: "65px" }}>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card p-5 mt-5 pt-3 myCard" style={styleCard}>
              <h2 className="text-center" style={{ fontWeight: "600" }}>
                Binar Car Rental
              </h2>

              <div className="row">
                <div className="col-4 d-flex justify-content-center align-content-center">
                  <img src="./assets/binar.png" alt="" style={imgStyle} />
                </div>
                <div className="col-8 d-flex justify-content-center align-content-center">
                  <div
                    style={{
                      margin: "auto",
                    }}
                  >
                    {!login && <Login onLogin={handlerStateLogin} />}
                    {login && name.length > 0 && (
                      <div className="mt-1">
                        <h5>Name : {name}</h5>
                      </div>
                    )}
                    {login && email.length > 0 && (
                      <div className="mt-1">
                        <h5>Email : {email}</h5>
                      </div>
                    )}
                    {login && <Logout onLogout={handlerStateLogout} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "170px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
