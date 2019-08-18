import React, { Component } from "react";

export default class Daysnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    };
  }

  colorDay = day => {
    if (day === this.props.day) {
      return "primary";
    } else return "white";
  };

  changePage = factor => {
    var { days } = this.state;
    var { day } = this.props;
    let present = days.indexOf(day);
    if (factor < 0 && present === 0) {
      return;
    } else if (factor > 0 && present === days.length - 1) {
      return;
    }
    let selection = this.state.days[present + factor];
    this.props.handleDayChange(selection);
  };

  renderDays = () => {
    return (
      <React.Fragment>
        {this.state.days.map(day => (
          <div className="page-item btn-group" role="group" key={day}>
            <button
              className={"btn px-5 btn-" + this.colorDay(day)}
              href="#!"
              onClick={() => {
                this.props.handleDayChange(day);
              }}
              key={day}
            >
              {day}
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul className="mt-3 pagination m-2 row">
            <li className="page-item">
              <a
                className="page-link"
                href="#!"
                aria-label="Previous"
                onClick={() => {
                  this.changePage(-1);
                }}
              >
                <span aria-hidden="true"> &laquo; Previous </span>
                <span className="sr-only" />
              </a>
            </li>
            {this.renderDays()}
            <li className="page-item">
              <a
                className="page-link"
                href="#!"
                aria-label="Next"
                onClick={() => {
                  this.changePage(1);
                }}
              >
                <span aria-hidden="true"> Next &raquo; </span>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
