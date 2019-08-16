import React, { Component } from "react";
import Subject from "./Subject";
import Teacher from "./Teacher";
import Type from "./Type";
import "bootstrap/dist/css/bootstrap.css";

export default class Period extends Component {
  render() {
    return (
      <React.Fragment>
        <Subject />
        <Teacher />
        <Type />
      </React.Fragment>
    );
  }
}
