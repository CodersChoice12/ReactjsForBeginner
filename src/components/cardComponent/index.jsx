import React from "react";
import "../../App.css";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const CardComponent = ({ cardData, setData }) => {
  const handleDelete = (id) => {
    const filteredData = cardData.filter((card) => card.id !== id);

    setData(filteredData);
  };
  return (
    <>
      {cardData.map((card) => {
        const { id, title, imgUrl, para } = card;
        return (
          <div id={id} className="card_container">
            <img className="card_img" src={imgUrl} alt="" />
            <div className="card_content">
              <h2 className="text-content">{title}</h2>
              <p className="text-content">{para}</p>
              <button>Go Anyway</button>
              <div className="another_content">
                <button
                  onClick={() => handleDelete(id)}
                  className="icon-wrapper"
                >
                  <MdDeleteOutline style={{ fontSize: "42px" }} />
                </button>
                <button className="icon-wrapper">
                  <FiEdit style={{ fontSize: "42px" }} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardComponent;
