import React, { Component } from "react";
import { sendData } from "./helper";

export default class AddTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      temp: { id: 1, name: "", short: "", department: "ECE" }
    };

    this.gullible = false;
  }

  componentWillUnmount() {
    sendData(this.state);
  }

  handleClick = () => {
    if (this.state.temp.name && this.state.temp.short) {
      var previous = this.state.teachers;
      var temp1 = this.state.temp;
      console.log(temp1.id);
      previous.push(temp1);
      this.setState({
        teachers: previous,
        temp: {
          id: this.state.temp.id + 1,
          name: "",
          short: "",
          department: "ECE"
        }
      });
    }
  };
  changeShort = str => {
    let temp1 = this.state.temp;
    temp1.short = str;
    this.gullible = this.state.teachers.find(teacher => str === teacher.short)
      ? true
      : false;
    this.setState({
      temp: temp1
    });
  };
  handleInput = (evt, type) => {
    let input = evt.target.value;
    let temp1 = this.state.temp;
    if (type === "name") {
      temp1.name = input;
      let res = input.split(".");
      res = res[res.length - 1].split(" ");
      let str = "";
      res.map(r => (str += r[0] !== undefined ? r[0] : ""));
      this.changeShort(str);
    } else {
      temp1.department = input;
    }
    this.setState({ temp: temp1 });
  };

  handleDelete = index => {
    let temp = this.state.teachers;
    temp.splice(index, 1);
    this.setState({
      teachers: temp
    });
    this.changeShort(this.state.temp.short)
  };

  renderTeacherList = () => {
    return (
      <React.Fragment>
        {this.state.teachers.map((teacher, index) => (
          <div className="m-1 row" key={index}>
            <p className="col-1"> {teacher.id} </p>
            <p className="col-4">{teacher.name}</p>
            <p className="col-3"> {teacher.short}</p>
            <p className="col-2"> {teacher.department}</p>
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
          <p className="col-1 component border"> ID </p>
          <p className="col-4 component border">Teacher Name</p>{" "}
          <p className="col-3 component border"> Short Form</p>
          <p className="col-2 component border"> Department </p>
        </div>
        {this.renderTeacherList()}
        <div name="addTeacherComponents" className="row m-2">
          <input
            className="col-4 form-control px-2 mx-2"
            type="text"
            placeholder="teacher Name"
            value={this.state.temp.name}
            onChange={evt => this.handleInput(evt, "name")}
          />
          <input
            className={
              "col-3 form-control " + (this.gullible ? "bg-danger" : "") 
            }
            type="text"
            placeholder="short form"
            value={this.state.temp.short}
            onChange={evt => this.changeShort(evt.target.value)}
          />
          <input
            className="col-3 form-control mx-2"
            type="text"
            placeholder="Department"
            value={this.state.temp.department}
            onChange={evt => this.handleInput(evt, "dep")}
          />
          <button
            name="addsTeacher"
            className={
              "btn btn-sm " + (this.gullible ? "btn-danger" : "btn-primary")
            }
            onClick={!this.gullible ? this.handleClick : undefined}
          >
            Add teacher
          </button>
        </div>
      </React.Fragment>
    );
  }
}
