import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Subject extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-group m-2">
          <input
            type="text"
            placeholder="Subject Name"
            className="form-control mr-4"
            id="subjectName"
          />
        </div>
      </React.Fragment>
    );
  }
}
