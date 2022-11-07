import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const ButtonStatus = buttonDisabled === false ? true : false;

  return (
    <div className="App">
      <img src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="logo" />
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={() => setButtonDisabled(ButtonStatus)} />
    </div>
  );
}

export default App;
