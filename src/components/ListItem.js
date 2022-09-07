import React from "react";

const ListItem = ({ todo, onDelete, onCompleteChange }) => {
  return (
    <li className="todo-items">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onCompleteChange}
      />
      <img
        className="delete-img"
        src="/images/delete.png "
        alt="delete"
        onClick={onDelete}
      />
      <img src="/images/add.png " alt="add" />
      <span style={{ textDecoration: todo.completed && "line-through" }}>
        {todo.todo}
      </span>
    </li>
  );
};

export default ListItem;
