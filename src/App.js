import React from "react";
import ClickMeButton from "./ClickMeButton";
import ToggleButton from "./ToggleButton";
import ButtonGroup from "./ButtonGroup";
import Counter from "./Counter";
import DisplayTab from "./DisplayTab";
import DisplayTabProps from "./DisplayTabProps";
import AuthForm from "./AuthForm";
import AddDivForm from "./AddDivForm";
import "./App.css";


function App() {
  const tab1 = ["apple", "banana", "orange"];
  const tab2 = ["dog", "cat", "mouse"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Exercice 1</h1>
      <ClickMeButton />
      <ToggleButton />
      <ButtonGroup />
      <Counter />

      <h1>Exercice 2</h1>
      <DisplayTab />
      <DisplayTabProps tab={tab1} />
      <DisplayTabProps tab={tab2} />

      <h1>Exercice 3</h1>
      <AuthForm />

      <h1>Exercice 4</h1>
      <AddDivForm />
    </div>
  );
}

export default App;
