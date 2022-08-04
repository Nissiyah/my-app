import React, { useState, useRef } from "react";

const ListItem = () => {
  const todoList = [""];
  const [todo, addTodo] = useState(todoList);
  const getInputValue = useRef(null);
  const [showLists, setShowLists] = useState(true);

  const handleChange = (event) => {
    addTodo(event.target.value);
    showLists?  <li className="todo-items">
    <input type="checkbox" />
       <input type="text"></input>

        <img className="delete-img" src="/images/delete.png " alt="delete" />
        <img src="/images/add.png " alt="add" />
      </li>  :<input
            className="todo-input"
            type="text"
            ref={getInputValue}
            onChange={handleChange}
            placeholder="Enter Your Task"
          ></input>
  
    // console.log("value is:", event.target.value);

  const handleClick = (event) => {
    event.preventDefault();

    // console.log("button pressed");
    // console.log(getInputValue.current.value);
  };
  
  return (
    <div>
      <div>
        <form>
          <input
            className="todo-input"
            type="text"
            ref={getInputValue}
            onChange={handleChange}
            placeholder="Enter Your Task"
          ></input>
        </form>

        <button
          onClick={handleClick}
          className="button"
          type="submit"
          setShowLists="false"
        >
          +
        </button>
      </div>
      
  );
};

export default ListItem;
