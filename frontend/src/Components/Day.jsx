import React, { Component } from "react";
import Period from "./Period";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: this.props.periods
    };
  }

  renderPeriods = () => {
    let Periods = this.state.periods.map((period, index) => (
      <Period
        className="m-2"
        key={period.id}
        index={index}
        handleDelete={index => {
          this.props.handleDelete(index);
        }}
      />
    ));

    return <div className="column">{Periods}</div>;
  };

  render() {
    return <React.Fragment>{this.renderPeriods()}</React.Fragment>;
  }
}
