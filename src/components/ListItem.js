import React from "react";

const ListItem = ({ todo }) => {
  return (
    <li className="todo-items">
      <input type="checkbox" />
      <img className="delete-img" src="/images/delete.png " alt="delete" />
      <img src="/images/add.png " alt="add" />
      <span>{todo}</span>
    </li>
  );
};

export default ListItem;
