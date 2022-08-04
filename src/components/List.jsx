import React from "react";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="todo-list">
      <ListItem />
      <li className="last-todo">
        <span className="todo-span">All</span>
        <span className="todo-span">Active</span>
        <span className="todo-span">completed</span>
        <span className="todo-span">Clear completed</span>
      </li>
    </div>
  );
}
export default List;
