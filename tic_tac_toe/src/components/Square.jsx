import React from "react";

const Square = ({ onClick, value }) => {
  const getStyle = () => {
    if (value === "X") {
      return { color: "red", fontWeight: "bold" };
    }
    if (value === "O") {
      return { color: "blue", fontWeight: "normal", opacity: 0.8 };
    }
    return {};
  };

  return (
    <div
      onClick={onClick}
      className="square"
    >
      <h5 style={getStyle()}>{value}</h5>
    </div>
  );
};

export default Square;
