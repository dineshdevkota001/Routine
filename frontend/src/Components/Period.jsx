import React, { Component } from "react";
import Subject from "./Subject";
import Teacher from "./Teacher";
import Type from "./Type";
import TimeDetails from "./TimeDetails";
import "bootstrap/dist/css/bootstrap.css";

export default class Period extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 1,
      nop: 2,
      teachers: [],

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container border bg-secondary rounded m-2">
          <Subject />
          <Teacher />
          <div className="row">
            <TimeDetails />
            <Type />
          </div>

        </div>
      </React.Fragment >
    );
  }
}
