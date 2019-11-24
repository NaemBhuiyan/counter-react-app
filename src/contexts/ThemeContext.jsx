import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    dark: { syntax: "#fff", ui: "#333", bg: "#555" }
  };
  changeTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, themeToggle: this.changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
