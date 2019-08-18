import React, { Component } from "react";
import Daysnav from "./Daysnav";
import Day from "./Day";

export default class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "Sunday",
      daynames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],

      days: [
        {
          id: 1,
          name: "Sunday",
          periods: []
        },
        {
          id: 1,
          name: "Monday",
          periods: []
        },
        {
          id: 1,
          name: "Tuesday",
          periods: []
        },
        {
          id: 1,
          name: "Wednesday",
          periods: []
        },
        {
          id: 1,
          name: "Thursday",
          periods: []
        },
        {
          id: 1,
          name: "Friday",
          periods: []
        }
      ]
    };
  }

  handleDayChange = selection => {
    console.log(selection);
    this.setState({
      day: selection
    });
  };

  deletePeriod = (index, day) => {
    let temp = this.state.days;
    temp[day].periods.splice(index, 1);
    this.setState({ days: temp });
  };

  renderDay = () => {
    // let { day, days } = this.state;
    return (
      <div>
        {this.state.days.map(
          (one, index) =>
            one.name === this.state.day && (
              <Day
                key={index}
                index={index}
                periods={one.periods}
                handleDelete={(index, day) => this.deletePeriod(index, day)}
                handleAddition={this.handleAddition}
              />
            )
        )}
      </div>
    );
  };

  handleAddition = index => {
    if (this.state.days[index].periods.length < 6) {
      let temp = this.state.days;
      temp[index].periods.push({
        id: ++temp[index].id
      });
      this.setState({ days: temp });
    }
  };

  render() {
    var { day, daynames, days } = this.state;
    return (
      <React.Fragment>
        <Daysnav
          key="primary"
          day={this.state.day}
          handleDayChange={selection => this.handleDayChange(selection)}
        />
        {this.renderDay()}
        {days[daynames.indexOf(day)].periods.length > 4 && (
          <Daysnav
            key="secondary"
            day={this.state.day}
            handleDayChange={selection => this.handleDayChange(selection)}
          />
        )}
      </React.Fragment>
    );
  }
}
