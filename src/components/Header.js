import React, { useState } from "react";

function Header({ input, setInput }) {
  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <nav className="nav">
      <h1 className="heading">Bank of FlatIron</h1>
      <input
        className="input"
        type="text"
        onChange={handleInput}
        value={input}
      />
    </nav>
  );
}
export default Header;
