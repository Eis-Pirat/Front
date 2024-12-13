import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Scanner ID</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/historique">Historique</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
