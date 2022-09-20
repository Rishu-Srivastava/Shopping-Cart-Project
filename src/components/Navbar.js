import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid row">
          <div className="col-1">
            <a className="navbar-brand" href="#">
              Apna Cart
            </a>
          </div>
          <div className="mt-2 col-2">
            <h5 className="mt-1">
              <span className="badge bg-secondary">
                {this.props.listLength}
              </span>
            </h5>
          </div>
          <div className="offset-md-8"></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
