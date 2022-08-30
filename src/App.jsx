import React, { useState } from "react";
import Input from "./components/Input";

import Lists from "./components/Lists";

const App = () => {
  // States to handle the input and the list of todos
  const [todos, setTodos] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  // Boolean to determine when the input field shows
  const [display, setDisplay] = useState(false);

  // Function to toggle input field to display
  const displayInput = () => {
    setDisplay(true);
  };

  // Function to save user key presses to the todo state
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentInput);
    setTodos([...todos, currentInput]);
    setCurrentInput("");
    setDisplay(false);
  };

  const handleDeleteClick = (e, key) => {
    e.preventDefault();
    console.log("key index:", key);

    console.log("deleted");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>TODO</h2>
      </div>

      <div className="todo-div">
        <li className="first-todo">
          Add a Todo
          <img src="/images/add.png " alt="add" onClick={displayInput} />
        </li>

        {/* Conditionally render Input based on the `display` state created above */}
        {display && (
          <Input
            onChange={handleChange}
            value={currentInput}
            onSubmit={handleSubmit}
          />
        )}

        {/* Render all todos */}
        <Lists items={todos} onDelete={(e, key) => handleDeleteClick(e, key)} />
      </div>
    </div>
  );
};

export default App;
