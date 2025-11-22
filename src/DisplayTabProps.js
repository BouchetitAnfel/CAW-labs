import React, { useState } from "react";

function DisplayTabProps({ tab }) {
  const [items, setItems] = useState(tab);

  const handleClick = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTabProps;
