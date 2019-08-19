import React, { Component } from "react";
import Daysnav from "./Routine/Daysnav";
import Day from "./Routine/Day";
import Programs from "./Routine/Programs";

export default class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classDetails: {
        group: "A",
        program: "BCT",
        semester: "Even",
        year: "I",
        nog: 2
      },
      day: "Sunday",
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
    this.daynames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ];
  }

  handleDayChange = selection => {
    console.log(selection);
    this.setState({
      day: selection
    });
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

  handleChangePeriod = (day, index, period) => {
    let temp = this.state.days;
    temp[day].periods[index] = period;
    this.setState({ days: temp });
  };

  deletePeriod = (index, day) => {
    let temp = this.state.days;
    temp[day].periods.splice(index, 1);
    this.setState({ days: temp });
  };

  handleProgram = programs => {
    this.setState({ program: programs.program, group: programs.group });
  };

  renderDay = () => {
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
                handleChangePeriod={(day, index, period) =>
                  this.handleChangePeriod(day, index, period)
                }
              />
            )
        )}
      </div>
    );
  };

  render() {
    var { day, days } = this.state;
    return (
      <React.Fragment>
        <Programs
          state={this.state.classDetails}
          handleInput={programs => this.handleProgram(programs)}
        />
        <Daysnav
          key="primary"
          day={this.state.day}
          handleDayChange={selection => this.handleDayChange(selection)}
        />
        {this.renderDay()}
        {days[this.daynames.indexOf(day)].periods.length > 4 && (
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
