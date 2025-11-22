import React from "react";

function DisplayTab() {
  const tab = ["hello", "world", "from", "react"];
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default DisplayTab;
