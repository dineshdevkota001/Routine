import React, { Component } from "react";
import "./logo.png";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery"

export default class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      teacherCount: 1,
      teachers: [{ id: 0, name: "" }]
    };
  }

  handleTeacherAddition = () => {
    if (this.state.teacherCount < 3) {
      let temp = this.state.teachers
      temp.push({ id: this.state.teacherCount, name: "" })
      this.setState({ teacherCount: this.state.teacherCount + 1, teachers: temp })
      console.log(this.state.teacherCount);
    }
  };

  handleDelete = index => {
    let converted = this.state.teachers.splice(index, 1);
    this.setState({ teachers: converted });
  };

  handleInput = id => {
    let present_data = this.state.teachers;
    // present_data[id].name = document.getElementById(('TeacherName' + id.toString())).value;
    console.log('#TeacherName' + id.toString());
    present_data[id].name = $('#TeacherName' + id.toString()).value;
    this.setState({ teachers: present_data })
    console.log(this.state.teachers[id].name);
  };

  renderInput = () => {
    return (
      <div className="row m-1">
        {this.state.teachers.map(teacher => (
          <div key={teacher.id}>
            <input
              className="form-control m-1"
              type="text"
              id={"TeacherName" + teacher.id.toString()}
              placeholder="Teacher Name"
              onChange={() => this.handleInput(teacher.id)}
            />
            <button
              htmlFor="subjectName"
              className="input-group-append btn btn-danger m-1"
              onClick={() => this.handleDelete(teacher.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <label htmlFor="teacher_group" className="col-2 input-group-text m-2">
            Teacher Name
          </label>
          {this.renderInput()}
        </div>
        <button
          onClick={this.handleTeacherAddition}
          className="btn btn-lg btn-primary m-2"
        >
          Add teacher
        </button>
      </React.Fragment>
    );
  }
}
