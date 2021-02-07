import React, { Component } from "react";
import "./style.css";

class LandingPage extends Component {
  state = {};

  handleClick = () => {
    this.props.history.push("/xxx");
  };

  render() {
    return (
      <div className={"landingContainer"} onClick={this.handleClick}></div>
    );
  }
}

export default LandingPage;
