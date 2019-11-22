import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {
      counter,
      onIncrement,
      onDecriment,
      onDelete,
      index,
      title
    } = this.props;
    console.log("app - counter");

    return (
      <React.Fragment>
        <h4 className="bg-200">Item #{title} </h4>
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

        <button
          onClick={() => onDelete(index)}
          className="btn btn-danger btn-sm m-2">
          Delete
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
