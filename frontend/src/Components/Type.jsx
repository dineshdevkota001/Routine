import React, { Component } from "react";

export default class Type extends Component {
  constructor() {
    super();
    this.state = {
      type: ""
    };
  }
  onchangeType = event => {
    if (event.target.value === "") alert("Please give a correct value");
    else this.setState({ type: event.target.value });
  };
  render() {
    console.log(this.state.type);
    return (
      <React.Fragment>
        <select
          className="col-2 m-2 p-2 rounded-lg bg-light"
          name="SubjectType"
          id="subtype"
          onChange={evt => this.onchangeType(evt)}
        >
          <option className="invisible" value="">
            Choose a type
          </option>
          <option className="bg-light" value="Lecture" href="#!">
            Lecture
          </option>
          <option className="bg-light" value="Practical" href="#!">
            Practical
          </option>
          <option className="bg-light" value="Theory" href="#!">
            Theory
          </option>
        </select>
      </React.Fragment>
    );
  }
}
