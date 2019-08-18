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
        handleDelete={(index, day) => {
          this.props.handleDelete(index, this.props.index);
        }}
      />
    ));

    return <div className="d-flex flex-wrap">{Periods}</div>;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderPeriods()}
        <button
          onClick={() => {
            this.props.handleAddition(this.props.index);
          }}
          className="btn btn-primary m-2"
        >
          Add new Period
        </button>
      </React.Fragment>
    );
  }
}
