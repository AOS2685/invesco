import React from "react";

function Header() {
  return (
    <header>
      <div className="left-side">
        <img className="logo" src="favicon.png" alt="logo-img" />
        <span className="company_name">INVESCO</span>
        {/* Whereas recognition of the inherent dignity */}
      </div>
      <div className="search_bar">
        <input
          type="text"
          id="myInput"
          placeholder="What are you looking for today?"
        />
      </div>
      <div className="right-side">
        <span>
          <pre>ABOUT </pre>
        </span>
        <span>
          <pre>PRICING </pre>{" "}
        </span>
        <span>
          <pre>SUPPORT </pre>
        </span>
        <span>
          <pre>LOGIN </pre>
        </span>
      </div>
    </header>
  );
}

export default Header;
