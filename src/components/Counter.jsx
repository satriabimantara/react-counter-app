import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags_element: ["tag1", "tag2", "tag3", "tag4"],
  };

  handlingIncrement = (product) => {
    this.setState({
      count:
        this.state.count < product.amount
          ? this.state.count + 1
          : product.amount,
    });
  };
  handlingDecrement = () => {
    this.setState({ count: this.state.count === 0 ? 0 : this.state.count - 1 });
  };
  // Conditional Rendering in JSX
  renderTags() {
    if (this.state.tags_element.length === 0) return <p>There is no Tags!</p>;
    return (
      <ul>
        {this.state.tags_element.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handlingIncrement({
              id: 21,
              name: "Baju Batik",
              amount: 23,
            });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handlingDecrement}
          className="btn btn-danger btn-sm ml-3"
        >
          Decrement
        </button>
        <button
          className="btn btn-sm btn-success m-2"
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
        {/* this.renderTags() */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
