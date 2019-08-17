import React, { Component } from "react";

export default class Type extends Component {
  constructor() {
    super();
    this.state = {
      type: ""
    };
  }
  onchangeType = (event) => {
    if (event.target.value === "") alert("Please give a correct value")
    else this.setState({ type: event.target.value })
  }
  render() {
    console.log(this.state.type);
    return (
      <React.Fragment>
        <select className="m-2 p-2 rounded-lg bg-light" name="SubjectType" id="subtype" onChange={(evt) => this.onchangeType(evt)}>
          <option className="invisible" value="">Choose a type</option>
          <option className="bg-light rounded" value="Lecture" href="#!">
            Lecture
          </option>
          <option className="bg-light rounded" value="Practical" href="#!">
            Practical
          </option>
          <option className="bg-light rounded" value="Theory" href="#!">
            Theory
          </option>
        </select>
      </React.Fragment>
    );
  }
}
