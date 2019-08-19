import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Classs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classs: this.props.state
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="input-group m-2">
          <input
            type="text"
            placeholder="Class Name"
            className="form-control mr-4"
            id="Class Name"
            onChange={evt => this.props.handleInput(evt.target.value)}
          />
        </div>
      </React.Fragment>
    );
  }
}
