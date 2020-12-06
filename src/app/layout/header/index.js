import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header({ onChange }) {
  return (
    <div className="__dml header">
      <ul>
        <li>
          <Link to="/" onClick={onChange}>
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={onChange}>
            About us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
