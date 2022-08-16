import React, { useState } from "react";
import Input from "./components/Input";

function App() {
  const [input, setInput] = useState("");

  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>TODO</h2>
      </div>

      <div className="todo-div">
        <li className="first-todo">
          Add a Todo
          <img src="/images/add.png " alt="add" onClick={handleClick} />
        </li>
        <Input />
      </div>
    </div>
  );
}

export default App;
