import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId =
  "462146044158-2fsqfmi1ag1kumnf2n4ld97ac529j7c3.apps.googleusercontent.com";

function Logout(props) {
  const onSuccess = (e) => {
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    props.onLogout();
  };

  return (
    <div id="signInButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
