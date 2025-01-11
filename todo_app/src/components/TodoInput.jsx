import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue(""); // Clear input after adding
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
