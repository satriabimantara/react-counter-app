import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-sm btn-primary p-2 m-2 btn-block col-lg-4"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
