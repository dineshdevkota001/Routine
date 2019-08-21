import React, { Component } from "react";
import axios from "axios";

export default class AddProgram extends Component {
  //  Constructor and state
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      temp: { id: 1, name: "", short: "", department: "", nog: 2 }
    };
  }

  componentDidMount(){
    this.refreshList()
  }

  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/programs/")
      .then(res => {
        this.setState({
          programs : res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  // handle interactions
  handleClick = () => {
    if (this.state.temp.name && this.state.temp.short) {
      let previous = this.state.programs;
      let temp1 = this.state.temp;
      temp1.id = "T" + temp1.id.toString();
      previous.push(temp1);
      this.setState({
        programs: previous,
        temp: {
          id: this.state.temp.id + 1,
          name: "",
          short: "",
          department: "ECE",
          nog: 2
        }
      });
    }
  };

  handleInput = (input, type) => {
    let temp1 = this.state.temp;
    if (type === "name") {
      temp1.name = input;
    } else if (type === "srt") {
      temp1.short = input;
    } else if (type === "dep") {
      temp1.department = input;
    } else {
      temp1.nog = parseInt(input);
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

  // handle rendering
  renderProgramList = () => {
    return (
      <React.Fragment>
        {this.state.programs.map((program, index) => (
          <div className="m-1 row" key={index}>
            <p className="col-1"> {program.programid} </p>
            <p className="col-4">{program.programname}</p>
            <p className="col-2"> {program.programid}</p>
            <p className="col-2"> {program.departmentid}</p>
            <p className="col-2"> {2/*program.nog*/}</p>
            <button
              className="btn btn-danger col-1"
              onClick={index => this.handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  };

  // the original return
  render() {
    return (
      <React.Fragment>
        <div style={{background:"#eee"}}>
          <hr/>
          <div name="addProgramComponents" className="row m-2">
            <input
              className="col-3 form-control px-2 mx-2"
              type="text"
              placeholder="Program Name"
              value={this.state.temp.name}
              onChange={evt => this.handleInput(evt.target.value, "name")}
            />
            <input
              className="col-3 form-control  mx-2"
              type="text"
              placeholder="short form"
              value={this.state.temp.short}
              onChange={evt => this.handleInput(evt.target.value, "srt")}
            />
            <input
              className="col-3 form-control mx-2"
              type="text"
              placeholder="Department"
              value={this.state.temp.department}
              onChange={evt => this.handleInput(evt.target.value, "dep")}
            />
            <input
              className="col-1 form-control mx-2"
              type="text"
              placeholder="Number of Group"
              value={this.state.temp.nog}
              onChange={evt => this.handleInput(evt.target.value, "nog")}
            />

            <button
              name="addsProgram"
              className="btn btn-primary btn-sm col-1 mx-2"
              onClick={this.handleClick}
            >
              Add Program
            </button>
          </div>
          <hr/>
        </div>
        <div className="m-1 row">
          <p className="col-1 component border"> ID </p>
          <p className="col-3 component border">Program Name</p>{" "}
          <p className="col-3 component border"> Short Form</p>
          <p className="col-2 component border"> Department </p>
          <p className="col-2 component border"> No of Group </p>
        </div>

        {this.renderProgramList()}
      </React.Fragment>
    );
  }
}
