import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = ({ totalCounter }) => {
  return (
    <ThemeContext.Consumer>
      {({ themeToggle, ...rest }) => {
        const { isLightTheme, dark } = rest;
        return (
          <nav
            className="navbar navbar-light  mt-2"
            style={{
              background: isLightTheme ? dark.bg : "#f5f5f5",
              color: isLightTheme ? dark.syntax : ""
            }}>
            <a className="navbar-brand mb-0">
              Your total Elemnet{" "}
              <span className="badge badge-pill badge-warning">
                {totalCounter}
              </span>
            </a>
            <button className="btn btn-primary" onClick={themeToggle}>
              Theme Toggle
            </button>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
