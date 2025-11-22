import React, { useState } from "react";

function ButtonGroup() {
  const [lastClicked, setLastClicked] = useState("");

  return (
    <div>
      <button onClick={() => setLastClicked("Button 1")}>Button1</button>
      <button onClick={() => setLastClicked("Button 2")}>Button2</button>
      <button onClick={() => setLastClicked("Button 3")}>Button3</button>
      {lastClicked && <p>{lastClicked} was clicked</p>}
    </div>
  );
}

export default ButtonGroup;