import React, { useState } from "react";

function AddDivForm() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs([...divs, { height, width, color }]);
    setHeight("");
    setWidth("");
    setColor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Background color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>

      {divs.map((div, index) => (
        <div
          key={index}
          style={{
            height: `${div.height}px`,
            width: `${div.width}px`,
            backgroundColor: div.color,
            margin: "10px 0",
          }}
        ></div>
      ))}
    </div>
  );
}

export default AddDivForm;
