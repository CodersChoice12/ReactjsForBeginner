import React from "react";
import "../../App.css";

const NotFound = ({ imgUrl, txt }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "450px", height: "450px" }}>
        <img className="not_found_img" src={imgUrl} alt="" />
      </div>
      <h4>{txt}</h4>
    </div>
  );
};

export default NotFound;
