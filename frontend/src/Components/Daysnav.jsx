import React, { Component } from "react";

export default class Daysnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Sunday",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    };
  }

  handleDays = selection => {
    this.setState({ selected: selection });
    this.props.handleDayChange(selection);
  };

  colorDay = day => {
    if (day === this.state.selected) {
      return "primary";
    } else return "info";
  };

  changePage = factor => {
    var { selected, days } = this.state;
    let present = days.indexOf(selected);
    if (factor < 0 && present === 0) {
      return;
    } else if (factor > 0 && present === days.length - 1) {
      return;
    }
    let selection = this.state.days[present + factor];
    this.setState({ selected: selection });
    this.props.handleDayChange(selection);
  };

  renderDays = () => {
    console.log("here");
    return (
      <React.Fragment>
        {this.state.days.map(day => (
          <div className="page-item btn-group" role="group" key={day}>
            <button
              className={"btn px-5 btn-" + this.colorDay(day)}
              href="#!"
              onClick={() => {
                this.handleDays(day);
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
          <ul className="pagination m-2 align-content-center">
            <li className="page-item">
              <a
                className="page-link"
                href="#!"
                aria-label="Previous"
                onClick={() => {
                  this.changePage(-1);
                }}
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
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
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
