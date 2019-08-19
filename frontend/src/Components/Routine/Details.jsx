import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.period = [1, 2, 3, 4, 5, 6, 7];
    this.nop = [1, 2, 3, 4];
    this.types = ["Lecture", "Practical", "Theory"];

    this.state = this.props.state;
  }

  pushChanges = () => {
    // this.props.handleInput();
  };
  onChangeType = value => {
    this.setState({ type: value });
    var temp = this.state;
    temp.type = value;
    this.props.handleInput(temp);
  };

  onChangePeriod = value => {
    this.setState({ start: value });
    var temp = this.state;
    temp.start = value;
    this.props.handleInput(temp);
  };

  onChangeNop = value => {
    this.setState({ nop: value });
    var temp = this.state;
    temp.nop = value;
    this.props.handleInput(temp);
  };

  renderPeriods = () => {
    return (
      <select
        name="Period"
        id="startPeriod"
        className="rounded-lg col-3 m-2 p-2 "
        onChange={evt => this.onChangePeriod(evt.target.value)}
      >
        {this.period.map(period => (
          <option value={period} key={period}>
            {period}
          </option>
        ))}
      </select>
    );
  };

  rendernop = () => {
    return (
      <select
        name="Period"
        id="startPeriod"
        className="col-3 m-2 p-2 rounded-lg "
        onChange={evt => this.onChangeNop(evt.target.value)}
      >
        {this.nop.map(period => (
          <option value={period} key={period}>
            {period}
          </option>
        ))}
      </select>
    );
  };

  renderType = () => {
    return (
      <select
        className="col-2 m-2 p-2 rounded-lg"
        name="SubjectType"
        id="subtype"
        onChange={evt => this.onChangeType(evt.target.value)}
      >
        {this.types.map(type => (
          <option className="invisible" value={type} key={type}>
            {type}
          </option>
        ))}{" "}
      </select>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="col-9"
          onChange={details => this.props.handleInput(this.state)}
        >
          {this.renderPeriods()}
          {this.rendernop()}
          {this.renderType()}
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
