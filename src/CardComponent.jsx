import React, { useRef } from "react";
import "./App.css";
import Tree from "./assets/backgroundImage.jpg";

function CardComponent({ title, imgUrl, para, id }) {
  return (
    <div id={id} className="card_container">
      <img className="card_img" src={imgUrl} alt="" />
      <div className="card_content">
        <h2 className="text-content">{title}</h2>
        <p className="text-content">{para}</p>
        <button>Go Anyway</button>
      </div>
    </div>
  );
}

export default CardComponent;
