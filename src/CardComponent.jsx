import React, { useRef } from "react";
import "./App.css";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function CardComponent({ title, imgUrl, para, id }) {
  return (
    <>
      <div id={id} className="card_container">
        <img className="card_img" src={imgUrl} alt="" />
        <div className="card_content">
          <h2 className="text-content">{title}</h2>
          <p className="text-content">{para}</p>
          <button>Go Anyway</button>
          <div className="another_content">
            <button className="icon-wrapper">
              <MdDeleteOutline style={{ fontSize: "42px" }} />
            </button>
            <button className="icon-wrapper">
              <FiEdit style={{ fontSize: "42px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
