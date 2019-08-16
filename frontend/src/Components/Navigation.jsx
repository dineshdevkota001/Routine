import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Navbar row">
          <ul>Home</ul>
          <ul>Teachers</ul>
          <ul>Classes</ul>
          <ul>Subjects</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
