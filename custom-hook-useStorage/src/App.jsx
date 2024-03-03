import React from "react";
import useStorage from "./useStorage";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useStorage("input", "");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Value in local storage: {localStorage.getItem("input")}</p>
      <p>Value in session storage: {sessionStorage.getItem("input")}</p>
    </div>
  );
}

export default App;
