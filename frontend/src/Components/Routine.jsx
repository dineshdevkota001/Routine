import React, { Component } from "react";
import Daysnav from "./Daysnav";
import Days from "./Days";

export default class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "Sunday",
      days: [
        { id: 1, name: "Sunday" },
        { id: 2, name: "Monday" },
        { id: 3, name: "Tuesday" },
        { id: 4, name: "Wednesday" },
        { id: 5, name: "Thursday" },
        { id: 6, name: "Friday" }
      ]
    };
  }

  handleDayChange = selection => {
    this.setState({ day: selection });
    console.log(this.state.day);
  };

  renderDay = () => {
    // let { day, days } = this.state;
    return (
      <div>
        {this.state.days.map(
          one => one.name === this.state.day && <Days key={one.id} />
        )}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Daysnav handleDayChange={this.handleDayChange} />
        <Days />
      </React.Fragment>
    );
  }
}
