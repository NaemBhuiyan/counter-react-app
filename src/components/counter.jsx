import React, { Component, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Counter extends Component {
  static contextType = ThemeContext;
  render() {
    const {
      counter,
      onIncrement,
      onDecriment,
      onDelete,
      index,
      title
    } = this.props;
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between align-item-center border-bottom pb-3 mb-5">
          <h4 className="d-inline-block">Item #{title} </h4>
          <button
            onClick={() => onDelete(index)}
            className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
        <span className={this.getClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => onDecriment(counter)}
          className="btn btn-dark btn-sm mr-2">
          Decriment
        </button>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-info btn-sm">
          Increament
        </button>
      </React.Fragment>
    );
  }

  getClasses() {
    let classes = "badge m-3 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
