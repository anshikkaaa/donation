import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">InternHub</h2>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
