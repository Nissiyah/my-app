import React from "react";
import LastTodo from "./LastTodo";

const ListItem = () => {
  return (
    <div>
      <ul>
        <li className="todo-items">
          <input type="checkbox" />
          <img className="delete-img" src="/images/delete.png " alt="delete" />
          <img src="/images/add.png " alt="add" />
        </li>
      </ul>
      <LastTodo />
    </div>
  );
};

export default ListItem;
