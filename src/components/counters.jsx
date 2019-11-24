import React, { Component, useState } from "react";
import Counter from "./counter";
import { ThemeContext } from "../contexts/ThemeContext";

class Counters extends Component {
  state = {
    title: ""
  };

  static contextType = ThemeContext;

  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      counters,
      onDecriment,
      onAddItem
    } = this.props;

    const { isLightTheme, dark } = this.context;
    const theme = isLightTheme ? dark : "";
    return (
      <React.Fragment>
        <div
          className="card my-3 shadow-lg"
          style={{ background: theme.ui, color: theme.syntax }}>
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    onAddItem(this.state.title);
                    this.setState({
                      title: ""
                    });
                  }}>
                  <div className="input-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Item Name EX:Hard disk"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      value={this.state.title}
                      onChange={({ target }) =>
                        this.setState({ title: target.value })
                      }
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => onAddItem(this.state.title)}
                        className="btn btn-secondary"
                        type="button"
                        id="button-addon2">
                        Add Item
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-3">
                <button onClick={onReset} className="btn btn-primary">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-lg-4 mb-3">
              <div
                className="card shadow"
                style={{ background: theme.ui, color: theme.syntax }}>
                <div className="card-body">
                  <Counter
                    key={index}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecriment={onDecriment}
                    counter={counter}
                    title={counter.title}
                    index={index}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
