import React from "react";

const Input = ({ onChange, value, onSubmit }) => {
  return (
    <div>
      <form>
        <input
          onChange={onChange}
          value={value}
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
        ></input>
        <button className="button" onClick={onSubmit}>
          +
        </button>
      </form>
    </div>
  );
};
export default Input;
