import React, { Component } from "react";
import Subject from "./Subject";
import Teacher from "./Teacher";
import Details from "./Details";
import Classs from "./Class";
import "bootstrap/dist/css/bootstrap.css";

export default class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        start: 1,
        nop: 1,
        type: "Lecture"
      },
      teachers: [],
      subject: "",
      classs: "",
      alternate: false
    };
  }
  handleSubject = value => {
    this.setState({ subject: value });
  };

  handleTeacher = teachers => {
    var previous = Object.assign({}, this.state);
    previous.teachers = teachers;
    this.setState({ previous });
  };

  handleDetails = detail => {
    this.setState({
      details: detail
    });
  };
  handleClass = classes => {
    this.setState({
      classs: classes
    });
  };

  render() {
    console.log(this.state.teachers.length);
    return (
      <React.Fragment>
        <div className="component col-6 border rounded  ">
          <Subject
            handleInput={subject => this.handleSubject(subject)}
            state={this.state.subject}
          />

          <Classs
            handleInput={subject => this.handleClass(subject)}
            state={this.state.classs}
          />

          <Teacher handleInput={teachers => this.handleTeacher(teachers)} />
          <div className="row m-2">
            <Details
              handleInput={detail => this.handleDetails(detail)}
              state={this.state.details}
            />

            <button
              className="m-2 col-2 btn btn-danger"
              onClick={() => this.props.handleDelete(this.props.index)}
            >
              Delete Period
            </button>

            <div className="custom-control m-4 custom-radio">
              <input
                type="checkbox"
                className="custom-control-input"
                value="true"
                id={"Alternate" + this.props.index}
              />

              <label
                className="custom-control-label"
                htmlFor={"Alternate" + this.props.index}
              >
                Alternate
              </label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
