import React from "react";
import List from "./components/List";

function App() {
  const handleClick = (event) => {
    // 👇️ refers to the image element
    console.log(event.target);
    // this is where to indicate what you want the function to do
    console.log("Image clicked");
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
        <List />
      </div>
    </div>
  );
}

export default App;
