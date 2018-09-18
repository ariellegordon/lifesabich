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
    this.handleWindowHover = this.handleWindowHover.bind(this);
  }

  handleWindowHover(evt) {
    const { target } = evt;
    target.classList.add("expand");

    // let modal = document.querySelector(".modal-container");
    // modal.classList.add("active");
  }

  render() {
    return (
      <div>
        <div>
          <div className="foodtruck-container">
            <div className="foodtruck">
              <div className="foodtruck-full">
                <img src={foodtruck} />
              </div>
              <div className="foodtruck-window">
                <img
                  src={modal}
                  style={{ backgroundColor: "#ffc5c5" }}
                  onMouseOver={this.handleWindowHover}
                />
              </div>
            </div>
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
