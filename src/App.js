import React, { Component } from "react";
// import logo from "./foodtruck.svg";
import "./App.css";
import foodtruck from "./foodtruck.svg";
import modal from "./foodtruck-menu.svg";
import Modal from "./Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
    this.handleTruckClick = this.handleTruckClick.bind(this);
  }

  handleTruckClick() {
    let modal = document.querySelector(".menu");
    modal.classList.add("active");
  }

  render() {
    return (
      <div>
        <div>
          <div className="foodtruck-container" onClick={this.handleTruckClick}>
            <img className="foodtruck" src={foodtruck} />
            <Modal />
          </div>
          <div className="lifesabich-logo">
            <h3 style={{ marginTop: -5, fontFamily: "SabonBol" }}>
              Lifesabich
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
