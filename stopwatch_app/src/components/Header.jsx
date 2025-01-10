import React from "react";
import Times from './Times.jsx'; // Use './' for relative path

const Header = () => {
  return (
    <>
      <div className="container" style={"justify-content : center;"}>
        <h1>Stopwatch</h1>
        <Times></Times>
      </div>
    </>
  );
};

export default Header;
