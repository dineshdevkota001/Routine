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
      index: 0,
      days: [
        {
          name: "Sunday",
          periods: [{ id: 1 }]
        },
        {
          name: "Monday",
          periods: [{ id: 1 }]
        },
        {
          name: "Tuesday",
          periods: [{ id: 1 }]
        },
        {
          name: "Wednesday",
          periods: [{ id: 1 }]
        },
        {
          name: "Thursday",
          periods: [{ id: 1 }]
        },
        {
          name: "Friday",
          periods: [{ id: 1 }]
        }
      ]
    };
  }

  handleDayChange = selection => {
    console.log(selection);
    this.setState({
      day: selection,
      index: this.state.daynames.indexOf(selection)
    });
  };

  renderDay = () => {
    // let { day, days } = this.state;
    return (
      <div>
        {this.state.days.map(
          one =>
            one.name === this.state.day && (
              <Day
                key={one.name}
                periods={one.periods}
                handleDelete={index => this.deletePeriod(index)}
              />
            )
        )}
      </div>
    );
  };

  deletePeriod = index => {
    let temp = this.state.days;
    console.log("was here " + index + this.state.index);
    temp[this.state.index].periods.slice(index - 1, 1);
    this.setState({ days: temp });
  };

  handleAddition = () => {
    if (this.state.days[this.state.index].periods.length < 6) {
      let temp = this.state.days;
      let p = temp[this.state.index].periods;
      temp[this.state.index].periods.push({
        id: p[p.length - 1].id + 1
      });
      this.setState({ days: temp });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Daysnav handleDayChange={this.handleDayChange} />
        {this.renderDay()}
        <button
          onClick={() => {
            this.handleAddition();
          }}
          className="btn btn-primary m-2"
        >
          Add new Period
        </button>
      </React.Fragment>
    );
  }
}
