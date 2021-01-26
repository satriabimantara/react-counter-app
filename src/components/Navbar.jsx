import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">
            Navbar
            <span className="badge badge-primary ml-4 p-2">
              {this.props.totalCounters}
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
