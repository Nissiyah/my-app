import React from "react";
import ListItem from "./ListItem";

function Input() {
  return (
    <div>
      <form>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
        ></input>
      </form>

      <button onClick className="button" type="submit">
        +
      </button>
      <ListItem />
    </div>
  );
}
export default Input;
