import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { dummyData } from "./dummyData";

import CardComponent from "./component/cardComponent";
import Form from "./component/form";

function App() {
  const [data, setData] = useState(dummyData);
  const [isChange, setIsChange] = useState(false);

  const handleInputChange = (event) => {
    const query = event.target.value;
    const data = dummyData.filter(
      (card) => card.title.toLowerCase().indexOf(query.toLowerCase()) != -1
    );

    setData(data);
  };

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
        <CardComponent data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
