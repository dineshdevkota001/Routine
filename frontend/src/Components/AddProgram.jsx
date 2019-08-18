import React, { Component } from "react";

export default class AddProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Programs: [],
      temp: { id: 1, name: "", short: "" }
    };
  }

  handleClick = () => {
    if (this.state.temp.name && this.state.temp.short) {
      let previous = this.state.Programs;
      let temp1 = this.state.temp;
      previous.push(temp1);
      this.setState({
        Programs: previous,
        temp: { id: this.state.temp.id + 1, name: "", short: "" }
      });
    }
  };

  handleInput = (evt, type) => {
    let input = evt.target.value;
    let temp1 = this.state.temp;
    if (type === "name") {
      temp1.name = input;
    } else {
      temp1.short = input;
    }
    this.setState({ temp: temp1 });
  };

  renderTeacherList = () => {
    return (
      <React.Fragment>
        {this.state.Programs.map((teacher, index) => (
          <div className="m-1 row" key={index}>
            <p className="col-3"> {teacher.id} </p>
            <p className="col-6">{teacher.name}</p>{" "}
            <p className="col-3"> {teacher.short}</p>
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="m-1 row">
          <p className="col-3 component border"> ID </p>
          <p className="col-6 component border">Teacher Name</p>{" "}
          <p className="col-3 component border"> Short Form</p>
        </div>
        {this.renderTeacherList()}
        <div name="addTeacherComponents" className="row m-2">
          <input
            className="col-6 form-control px-2 mx-2"
            type="text"
            placeholder="teacher Name"
            value={this.state.temp.name}
            onChange={evt => this.handleInput(evt, "name")}
          />
          <input
            className="col-4 form-control px-2 mx-2"
            type="text"
            placeholder="short form"
            value={this.state.temp.short}
            onChange={evt => this.handleInput(evt, "s")}
          />
          <button
            name="addsTeacher"
            className="btn btn-primary btn-sm px-2 col-1 mx-2"
            onClick={this.handleClick}
          >
            Add teacher
          </button>
        </div>
      </React.Fragment>
    );
  }
}
