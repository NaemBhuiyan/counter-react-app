import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    title: ""
  };
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecriment,
      counters,
      onAddItem
    } = this.props;

    console.log(this.props);

    return (
      <React.Fragment>
        <div className="card my-3 shadow-lg">
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
                      placeholder="Your Item Name Here and place it"
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

            {/* <button onClick={onAddItem} className="btn btn-info m-2">
              Add item
            </button> */}
          </div>
        </div>

        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-lg-4 mb-3">
              <div className="card shadow bg-light">
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
