import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      teacherCount: 1,
      id: 1,
      teachers: [{ id: 0, name: "" }]
    };
  }

  handleTeacherAddition = () => {
    if (this.state.teachers.length < 3) {
      let temp = this.state.teachers;
      console.log(this.state.teacherCount);
      temp.push({ id: this.state.id, name: "" });
      this.setState({
        teacherCount: this.state.teacherCount + 1,
        teachers: temp,
        id: this.state.id + 1
      });
    } else {
      alert("Maximum Teacher Limit Reached");
    }
  };

  handleDelete = index => {
    let converted = this.state.teachers;
    console.log(index);
    converted.splice(index, 1);
    console.log(converted);
    this.setState({
      teacherCount: this.state.teachers.length - 1,
      teachers: converted
    });
  };

  handleInput = (event, id) => {
    let present_data = this.state.teachers;
    let target = event.target;
    present_data[id].name = target.value;
    this.setState({ teachers: present_data });
    console.log(this.state.teachers[id].name);
  };

  renderInput = () => {
    return (
      <div className="d-flex flex-nowrap m-1">
        {this.state.teachers.map(teacher => (
          <div className="flex-grow-1" key={teacher.id}>
            <input
              className="form-control m-1"
              type="text"
              id="TeacherName"
              placeholder="Teacher Name"
              onChange={evt =>
                this.handleInput(evt, this.state.teachers.indexOf(teacher))
              }
            />
            <button
              htmlFor="subjectName"
              className="input-group-append btn btn-danger m-1"
              onClick={() =>
                this.handleDelete(this.state.teachers.indexOf(teacher))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };

  render() {
    console.log(this.state.teacherCount);
    return (
      <React.Fragment>
        <div className="">
          {this.renderInput()}
          <button
            onClick={this.handleTeacherAddition}
            className="col-2 btn btn-primary m-2"
          >
            Add teacher
          </button>
        </div>
      </React.Fragment>
    );
  }
}
