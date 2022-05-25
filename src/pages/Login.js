import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  TokenResponse,
} from "@react-oauth/google";

import { parseJwt } from "../helper/parseJWT";

const Login = () => {
  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "auto" }}>
        <GoogleOAuthProvider clientId="955714329886-pbreek22fus7ih6f5lue1ebhtci5ccof.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(parseJwt(credentialResponse.credential));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
