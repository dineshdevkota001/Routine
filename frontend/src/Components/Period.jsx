import React, { Component } from "react";
import Subject from "./Subject";
import Teacher from "./Teacher";
import Type from "./Type";
import TimeDetails from "./TimeDetails";
import "bootstrap/dist/css/bootstrap.css";

export default class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 1,
      nop: 2,
      teachers: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className=" border rounded m-2">
          <Subject />
          <Teacher />
          <div className="row m-2">
            <TimeDetails />
            <Type />
            <button
              className="m-2 col-2 btn btn-danger"
              onClick={() => this.props.handleDelete(this.props.index)}
            >
              Delete Period
            </button>
            <div className="custom-control m-4 custom-radio">
              <input
                type="checkbox"
                className="custom-control-input"
                id={"Alternate" + this.props.index}
              />
              <label
                className="custom-control-label"
                htmlFor={"Alternate" + this.props.index}
              >
                Alternate
              </label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
