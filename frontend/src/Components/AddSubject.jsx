import React, { Component } from "react";
import axios from "axios";

export default class AddSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      temp: { id: 1, name: "", short: "", department: "" }
    };
  }

  addEmployee(employee) {
    let newPeriods = this.state.days.concat([employee]);
    localStorage.setItem("Subjects", JSON.stringify(newPeriods));
    this.setState({
      day: newPeriods.day,
      days: newPeriods.days
    });
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/subjects/")
      .then(res => {
        this.setState({
          subjects : res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  componentWillUnmount() {
    // this.addEmployee(this.state);
  }

  handleClick = () => {
    if (this.state.temp.name && this.state.temp.short) {
      let previous = this.state.subjects;
      let temp1 = this.state.temp;
      temp1.id = "T" + temp1.id.toString();
      previous.push(temp1);
      this.setState({
        subjects: previous,
        temp: {
          id: this.state.temp.id + 1,
          name: "",
          short: "",
          department: ""
        }
      });
    }
  };

  handleInput = (evt, type) => {
    let input = evt.target.value;
    let temp1 = this.state.temp;
    if (type === "name") {
      temp1.name = input;
    } else if (type === "srt") {
      temp1.short = input;
    } else {
      temp1.department = input;
    }
    this.setState({ temp: temp1 });
  };

  handleDelete = index => {
    let temp = this.state.subjects;
    temp.splice(index, 1);
    this.setState({
      subjects: temp
    });
  };

  renderSubjectList = () => {
    return (
      <React.Fragment>
        {this.state.subjects.map((subject, index) => (
          <div className="m-1 row" key={index}>
            <p className="col-2"> {subject.subjectid} </p>
            <p className="col-4">{subject.subjectname}</p>
            <p className="col-2"> {subject.subjectid}</p>
            <p className="col-2"> {subject.departmentid}</p>
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
          <div name="addSubjectComponents" className="row m-2">
            <input
              className="col-4 form-control px-2 mx-2 ml-4"
              type="text"
              placeholder="Subject Name"
              value={this.state.temp.name}
              onChange={evt => this.handleInput(evt, "name")}
            />
            <input
              className="col-3 form-control  mx-2"
              type="text"
              placeholder="short form"
              value={this.state.temp.short}
              onChange={evt => this.handleInput(evt, "srt")}
            />
            <input
              className="col-3 form-control mx-2"
              type="text"
              placeholder="Department"
              value={this.state.temp.department}
              onChange={evt => this.handleInput(evt, "dep")}
            />
            <button
              name="addsSubject"
              className="btn btn-primary btn-sm col-1 mx-2"
              onClick={this.handleClick}
            >
              Add Subject
            </button>
          </div>
          <hr/>
        </div>
        <div className="m-1 row">
          <p className="col-2 component border"> ID </p>
          <p className="col-4 component border">Subject Name</p>{" "}
          <p className="col-2 component border"> Short Form</p>
          <p className="col-2 component border"> Department </p>
          <p className="col-2 component border"> Action </p>
        </div>
        {this.renderSubjectList()}
      </React.Fragment>
    );
  }
}
