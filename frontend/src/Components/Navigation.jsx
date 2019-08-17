import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ["Home", "Teachers", "Classes", "Subject"]
    };
  }

  onPageChange = page => {
    this.props.pageHandler(page);
  };

  getNavClasses = page => {
    let r = " btn btn-";
    r += page === this.props.page ? "primary" : "info";
    return r;
  };

  renderNavItems = () => {
    return (
      <div className="btn-group" role="group">
        {this.state.pages.map(page => (
          <button
            type="button"
            className={this.getNavClasses(page)}
            onClick={() => {
              this.onPageChange(page);
            }}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderNavItems()}</React.Fragment>;
  }
}

export default Navigation;
