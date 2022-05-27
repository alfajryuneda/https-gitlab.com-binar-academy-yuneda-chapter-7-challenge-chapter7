import React from "react";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "462146044158-2fsqfmi1ag1kumnf2n4ld97ac529j7c3.apps.googleusercontent.com";

const Login = (props) => {
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client", start);
  // });
  const successGoogle = (response) => {
    // console.log(response);
    console.log(response.profileObj.name);
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    props.onLogin(name, email);
  };
  const failedGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <div style={{ margin: "auto" }}>
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={successGoogle}
          onFailure={failedGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;
