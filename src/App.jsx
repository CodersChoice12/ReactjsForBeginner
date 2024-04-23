import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { dummyData } from "./dummyData";

import Form from "./components/form";
import CardComponent from "./components/cardComponent";
import NotFound from "./components/NotFound";

function App() {
  const [data, setData] = useState(dummyData);
  const [isChange, setIsChange] = useState(false);

  const handleInputChange = (event) => {
    console.log("event is ", event);
    const query = event.target.value;

    const newData = dummyData.filter(
      (cards) => cards.title.toLowerCase().indexOf(query.toLowerCase()) != -1
    );

    setData(newData);
  };

  if (!data || data.length === 0) {
    return (
      <NotFound
        imgUrl="https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        txt="Card Not Found"
      />
    );
  }
  return (
    <div>
      <div
        className="button-wrapper"
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => setIsChange(!isChange)}>Add Card</button>
        <div style={{ width: "800px" }}>
          <input
            onChange={handleInputChange}
            className="searchbar"
            placeholder="Search here"
            type="text"
          />
        </div>
      </div>
      <Form isChange={isChange} setIsChange={setIsChange} data={data} />
      <div className="root">
        <CardComponent cardData={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
