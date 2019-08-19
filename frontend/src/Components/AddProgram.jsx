import React, { Component } from "react";

export default class AddProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      temp: { id: 1, name: "", short: "" }
    };
  }

  handleClick = () => {
    if (this.state.temp.name && this.state.temp.short) {
      let previous = this.state.programs;
      let temp1 = this.state.temp;
      previous.push(temp1);
      this.setState({
        programs: previous,
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
  handleDelete = index => {
    let temp = this.state.programs;
    temp.splice(index, 1);
    this.setState({
      programs: temp
    });
  };

  renderProgramList = () => {
    return (
      <React.Fragment>
        {this.state.programs.map((Program, index) => (
          <div className="m-1 row" key={index}>
            <p className="col-2"> {Program.id} </p>
            <p className="col-5">{Program.name}</p>
            <p className="col-3"> {Program.short}</p>
            <button
              className="btn btn-danger col-2"
              onClick={index => this.handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="m-1 row">
          <p className="col-2 component border"> ID </p>
          <p className="col-5 component border">Program Name</p>{" "}
          <p className="col-3 component border"> Short Form</p>
        </div>
        {this.renderProgramList()}
        <div name="addProgramComponents" className="row m-2">
          <input
            className="col-6 form-control px-2 mx-2"
            type="text"
            placeholder="Program Name"
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
            name="addsProgram"
            className="btn btn-primary btn-sm px-2 col-1 mx-2"
            onClick={this.handleClick}
          >
            Add Program
          </button>
        </div>
      </React.Fragment>
    );
  }
}
