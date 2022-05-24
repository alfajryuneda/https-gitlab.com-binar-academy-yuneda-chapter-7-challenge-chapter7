import React from "react";

const filterStyle = {
  height: "100%",
  width: "0",
  position: "fixed",
  zIndex: "1",
  top: "0",
  left: "0",
  overflowX: "hidden",
  paddingTop: "60px",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
};

const DarkBackground = () => {
  return (
    <div
      className="filter"
      id="filter"
      // onClick="inactiveDarkBackground()"
      style={{ ...filterStyle, width: "0" }}
    />
  );
};

export default DarkBackground;
