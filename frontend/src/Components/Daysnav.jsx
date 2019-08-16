import React, { Component } from "react";

export default class Daysnav extends Component {
  constructor(props) {
    super(props);
    this.days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ];
    this.state = { day: 1 };
  }
  handleDays = selection => {
    this.setState({ day: selection });
  };
  renderDays = () => {
    console.log(this.state.day);
    return (
      <div name="days" className="row Navbar">
        {this.days.map(day => (
          <ul
            onClick={() => {
              this.handleDays(day);
            }}
            key={day}
          >
            {day}
          </ul>
        ))}
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderDays()}</React.Fragment>;
  }
}
