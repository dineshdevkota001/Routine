import React, { Component } from "react";
import Period from "./Period";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: this.props.periods,
      day: this.props.index
    };
  }

  renderPeriods = () => {
    let Periods = this.state.periods.map((period, index) => (
      <Period
        className="m-2"
        key={period.id}
        index={index}
        day={this.state.day}
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
        <button
          onClick={() => {
            this.props.handleAddition(this.props.index);
          }}
          className="btn btn-primary m-2"
        >
          Add new Period
        </button>
        {this.renderPeriods()}
        {this.state.periods.length >= 2 && (
          <button
            onClick={() => {
              this.props.handleAddition(this.props.index);
            }}
            className="btn btn-primary m-2"
          >
            Add new Period
          </button>
        )}
      </React.Fragment>
    );
  }
}
