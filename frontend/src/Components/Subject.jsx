import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Subject extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-group m-2">
          <label
            htmlFor="subjectName"
            className="input-group-prepend input-group-text"
          >
            Subject Name
          </label>
          <input type="text" className="form-control" id="subjectName" />
        </div>
      </React.Fragment>
    );
  }
}
