import React, { Component } from "react";

export default class Daysnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    };
  }

  handleDays = selection => {
    this.props.handleDayChange(selection);
  };

  renderDays = () => {
    return (
      <div name="days" className="row Navbar">
        {this.state.days.map(day => (
          <ul
            className="Navbar-items"
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
