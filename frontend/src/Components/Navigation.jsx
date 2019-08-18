import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ["Home", "Teachers", "Classes", "Subject", "Programs"]
    };
  }

  onPageChange = page => {
    this.props.pageHandler(page);
  };

  getNavClasses = page => {
    let r = " nav-item nav-link ";
    r += page === this.props.page ? "active" : null;
    return r;
  };

  renderNavItems = () => {
    return (
      <div className="navbar-nav">
        {this.state.pages.map(page => (
          <a
            className={this.getNavClasses(page)}
            onClick={() => {
              this.onPageChange(page);
            }}
            href="#!"
            key={page}
          >
            {page}

            {page === this.props.page && (
              <span className="sr-only">(current)</span>
            )}
          </a>
        ))}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#!">
            Routine Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {this.renderNavItems()}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
