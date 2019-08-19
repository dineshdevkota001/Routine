import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: this.props.state
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-group m-2">
          <input
            type="text"
            placeholder="Subject Name"
            className="form-control mr-4"
            id="subjectName"
            onChange={evt => this.props.handleInput(evt.target.value)}
          />
        </div>
      </React.Fragment>
    );
  }
}
