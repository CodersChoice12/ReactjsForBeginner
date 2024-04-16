import React, { useRef, useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent";
import { dummyData } from "./dummyData";

function App() {
  const [click, setClick] = useState(false);
  function handleClick() {
    const newData = {
      id: 5,
      title: "Wonder Card",
      imgUrl:
        "https://images.unsplash.com/photo-1680329012007-1f59c9e7baab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cupiditate ad, tempore doloremque delectus, amet et dolorum totam odit expedita harum quos eaque! Recusandae sapiente consectetur quam, minus ratione quae.",
    };

    setClick(!click);

    dummyData.push(newData);
  }
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <button onClick={handleClick}>Add Card</button>
      </div>
      <div className="root">
        {dummyData?.map(function (card) {
          const { title, id, para, imgUrl } = card;
          return (
            <CardComponent title={title} imgUrl={imgUrl} para={para} id={id} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
