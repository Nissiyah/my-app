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
      </form>

      <button onClick={onSubmit} className="button" type="submit">
        +
      </button>
    </div>
  );
};
export default Input;
