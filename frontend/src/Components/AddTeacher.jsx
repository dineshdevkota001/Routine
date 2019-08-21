import React, { Component } from "react";
import axios from "axios";
import { sendData } from "./helper";

export default class AddTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      temp: { id: 1, name: "", short: "", department: "" }
    };

    this.gullible = false;
  }

  componentDidMount(){
    this.refreshList()
  }

  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/teachers/")
      .then(res => {
        this.setState({
          teachers : res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  componentWillUnmount() {
    // sendData(this.state);
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
          department: ""
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
            <p className="col-1"></p>
            <p className="col-1"> {teacher.teacherid} </p>
            <p className="col-4">{teacher.teachername}</p>
            {/* <p className="col-3"> {teacher.short}</p> */}
            <p className="col-3"> {teacher.departmentid}</p>
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
        <div style={{background:"#eee"}}>
          <hr/>        
          <div name="addTeacherComponents" className="row m-2">
            <input
              className="col-4 form-control px-2 mx-2  ml-5"
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
          <hr/>
        </div>
        <div className="m-1 row">
          <p className="col-1"> </p>
          <p className="col-1 component border"> ID </p>
          <p className="col-4 component border">Teacher Name</p>{" "}
          {/* <p className="col-3 component border"> Short Form</p> */}
          <p className="col-3 component border"> Department </p>
          <p className="col-2 component border"> Action </p>
        </div>
        {this.renderTeacherList()}
      </React.Fragment>
    );
  }
}
