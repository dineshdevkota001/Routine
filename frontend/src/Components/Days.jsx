import React, { Component } from "react";
import Period from "./Period";

export default class Days extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nPeriods: 1
    };
  }
  handleAddition = () => {
    if (this.state.nPeriods < 6)
      this.setState({ nPeriods: this.state.nPeriods + 1 });
  };

  renderPeriods = () => {
    let Periods = [];
    for (let i = 0; i < this.state.nPeriods; ++i) {
      Periods.push(<Period className="m-2" key={i} />);
    }

    return <div className="column">{Periods}</div>;
  };

  render() {
    return (
      <React.Fragment>
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
