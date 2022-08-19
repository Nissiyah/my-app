import React, { useState } from "react";
import Input from "./components/Input";

function App() {
  const inputArr = [
    {
      type: "text",
      value: "",
    },
  ];
  const [input, setInput] = useState(inputArr);
  const [display, setDisplay] = useState(false);
  const displayInput = () => {
    setInput((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setDisplay(false);
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
        {input.map((item) => {
          return (
            <div>
              <form>
                <input
                  className="todo-input"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Task"
                ></input>
              </form>

              <button onClick className="button" type="submit">
                +
              </button>
            </div>
          );
          {
            /* return <Input onChange={handleChange} value={item.value} />; */
          }
        })}
      </div>
    </div>
  );
}

export default App;
