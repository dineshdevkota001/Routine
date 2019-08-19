import React, { Component } from "react";

export default class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;

    this.groups = ["A", "B", "C", "D", "E", "F", "G", "H"];
    this.programs = ["BCT", "BEX"];
    this.years = ["I", "II", "III", "IV"];
    this.semesters = ["Even", "Odd"];
    this.presentgroups = this.groups.splice(0, this.state.nog);
  }

  handleGroupChange = value => {
    this.setState({ group: value });
    let temp = this.state;
    temp.group = value;
    this.props.handleInput(temp);
  };

  handleProgramChange = value => {
    this.setState({ program: value });
    let temp = this.state;
    temp.program = value;
    this.props.handleInput(temp);
  };

  handleYearChange = value => {
    this.setState({ year: value });
    let temp = this.state;
    temp.year = value;
    this.props.handleInput(temp);
  };

  handleSemesterChange = value => {
    this.setState({ semester: value });
    let temp = this.state;
    temp.semester = value;
    this.props.handleInput(temp);
  };

  renderYears = () => {
    return (
      <select
        className="rounded-lg col-2 m-2 p-2"
        name="presentyears"
        id="listpresentyears"
        onChange={evt => this.handleYearChange(evt.target.value)}
      >
        {this.years.map(year => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };

  renderSemesters = () => {
    return (
      <select
        className="rounded-lg col-2 m-2 p-2"
        name="presentsemesters"
        id="listpresentsemesters"
        onChange={evt => this.handleSemesterChange(evt.target.value)}
      >
        {this.semesters.map(semester => (
          <option value={semester} key={semester}>
            {semester}
          </option>
        ))}
      </select>
    );
  };

  renderGroups = () => {
    return (
      <select
        className="rounded-lg col-2 m-2 p-2"
        name="presentgroups"
        id="listpresentgroups"
        onChange={evt => this.handleGroupChange(evt.target.value)}
      >
        {this.presentgroups.map(presentgroup => (
          <option value={presentgroup} key={presentgroup}>
            {presentgroup}
          </option>
        ))}
      </select>
    );
  };

  renderPrograms = () => {
    return (
      <select
        className="rounded-lg col-2 p-2 m-2 "
        name="programs"
        id="listprograms"
        onChange={evt => this.handleProgramChange(evt.target.value)}
      >
        {this.programs.map(program => (
          <option value={program} key={program}>
            {program}
          </option>
        ))}
      </select>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="row alignment-center">
          <div className="col-1 mx-5" />
          {this.renderYears()}
          {this.renderSemesters()}
          {this.renderPrograms()}
          {this.renderGroups()}
        </div>
      </React.Fragment>
    );
  }
}
