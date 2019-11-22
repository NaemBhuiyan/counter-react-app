import React from "react";
const Navbar = ({ totalCounter }) => {
  console.log("render-Navbar");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand mb-0 text-secondary">
        Your total Elemnet{" "}
        <span className="badge badge-pill badge-warning">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default Navbar;
