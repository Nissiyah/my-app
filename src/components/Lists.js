import React from "react";
import LastTodo from "./LastTodo";
import ListItem from "./ListItem";

const Lists = ({ items, onDelete, onCompleteChange }) => {
  return (
    <div style={{ marginTop: "100px" }}>
      <ul>
        {/* Loop through the items/todos and render all */}
        {items.map((item, index) => (
          <ListItem
            todo={item}
            key={index}
            onDelete={(e) => onDelete(e, index)}
            onCompleteChange={(e) => onCompleteChange(e, index)}
          />
        ))}
      </ul>
      <LastTodo />
    </div>
  );
};

export default Lists;
