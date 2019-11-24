import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import ThemeContextProvider from "./contexts/ThemeContext";

class App extends Component {
  state = {
    counters: [
      { title: 1, value: 0 },
      { title: 2, value: 5 },
      { title: 3, value: 6 },
      { title: 4, value: 7 }
    ]
  };
  constructor(props) {
    super(props);
    console.log("app-Counstructor", props);
  }
  componentDidMount() {
    console.log("app -componentDidMount ");
  }

  handleAddItem = title => {
    // const test = this.state.counters[-1];
    // const addItemIdValue = counters[counters.length - 1].id + 1;
    // console.log(addItemIdValue);
    // counters.push();

    this.setState({
      counters: [...this.state.counters, { title, value: 0 }]
    });
  };

  handleRset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = deletedIndex => {
    const counters = this.state.counters.filter(
      (counter, index) => deletedIndex != index
    );
    this.setState({ counters });
  };

  handlerCounter = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };
  hanndleDecriment = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value >= 0) {
      this.setState({
        counters
      });
    }
  };
  render() {
    return (
      <ThemeContextProvider>
        <main className="container">
          <Navbar
            totalCounter={this.state.counters.filter(c => c.value > 0).length}
          />
          <Counters
            counters={this.state.counters}
            onReset={this.handleRset}
            onIncrement={this.handlerCounter}
            onAddItem={this.handleAddItem}
            onDelete={this.handleDelete}
            onDecriment={this.hanndleDecriment}
          />
        </main>
      </ThemeContextProvider>
    );
  }
}

export default App;
