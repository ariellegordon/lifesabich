import React, { Component } from "react";
// import logo from "./foodtruck.svg";
import "./App.css";
import foodtruck from "./foodtruck.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
    this.handleTruckClick = this.handleTruckClick.bind(this);
  }

  handleTruckClick() {
    this.setState({ displayMenu: !this.state.displayMenu });
    console.log("Clicked", this.state);
  }

  render() {
    const menu = (
      <div className="pop-up-menu">
        <p>hi</p>
      </div>
    );
    return (
      <div>
        {this.state.displayMenu ? menu : null}
        <div className="About">
          <p style={{ fontFamily: "SabonBol" }}>About</p>
        </div>
        <div className="foodtruck-container" onClick={this.handleTruckClick}>
          <img className="foodtruck" src={foodtruck} />
        </div>
        <div className="lifesabich-logo">
          <h3 style={{ marginTop: -5, fontFamily: "SabonBol" }}>Lifesabich</h3>
        </div>
      </div>
    );
  }
}

export default App;
