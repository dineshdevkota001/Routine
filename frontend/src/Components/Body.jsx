import React, { Component } from "react";
import Daysnav from "./Daysnav";
import Period from "./Period";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "Sunday",
      nPeriods: 1
    };
  }

  handleDayChange = selection => {
    this.setState({ day: selection });
  };

  handleAddition = () => {
    if (this.state.nPeriods < 6)
      this.setState({ nPeriods: this.state.nPeriods + 1 });
  };

  renderPeriods = () => {
    let Periods = [];
    for (let i = 0; i < this.state.nPeriods; ++i) {
      Periods.push(
        <Period
          className="m-10"
          handleDay={() => this.handleDayChange}
          key={i}
        />
      );
    }

    return <div className="column">{Periods}</div>;
  };

  render() {
    return (
      <React.Fragment>
        <Daysnav />
        {this.renderPeriods()}
        <br />
        <button
          onClick={() => {
            this.handleAddition();
          }}
          className="btn btn-primary m-2"
        >
          {" "}
          Add new Period
        </button>
      </React.Fragment>
    );
  }
}
