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
    this.showAbout = this.showAbout.bind(this);
    this.removeAbout = this.removeAbout.bind(this);
    this.showSabich = this.showSabich.bind(this);
  }

  handleWindowHover(evt) {
    const { target } = evt;
    target.classList.add("expand");
    let aboutSabich = document.querySelector(".about-sabich");
    aboutSabich.classList.add("display-menu");
  }

  showAbout() {
    console.log("Clicked Show About");
    let aboutInner = document.querySelector(".about-inner");
    aboutInner.classList.toggle("display");
  }

  showSabich() {
    let sabichInner = document.querySelector(".sabich-inner");
    sabichInner.classList.toggle("display");
  }

  removeAbout() {
    console.log("Clicked Remove About");
    let aboutInner = document.querySelector(".about-inner");
    aboutInner.classList.remove("display-about");
  }

  render() {
    const aboutData = `LIFESABICH is a food truck that doesn’t exist. A
              delicious sandwich, teetering on the edge of “rare,” that is just
              around the corner. It’s your special spot for which you want
              credit for discovery but relish the anonymity. A tasty snack you
              can never find. It is a zine, from the front lines of fashion
              examining the origins of desire. We’ve outsmarted our diets, or at
              least tried to, with endless attempts at nourishing, starving,
              restricting, and binging, constantly trying to satiate an
              unattainable and unnatural homeostasis. Often giving into what we
              don’t even know we crave—endless feeds of tuna tostadas, bulbous
              spirulina tinted smoothies, team-less sportswear, the ugliest
              sneakers you’ve ever seen—how do we take it all in, even when our
              stomachs and wallets tell us we’re full? LIFESABICH exists to ask:
              what does it mean to tell the story of a product that isn’t real?
              Does desire need to be plastic? An invitation: LIFESABICH calls a
              reader to accept that there is no food truck, but that as a
              participant they can chase it down regardless. After all, isn’t
              that what fashion is all about? Running after a collective
              fantasy, some- times so fast we choose to ignore our shoe is
              untied, where your speed speaks to your allegiance. Founded by a
              Designer and a Buyer, LIFESABICH is made by two people who love
              fashion but also want to foster a forum to speak both candidly and
              critically. By pursuing print, rather than digital, the intention
              is for a slower conversation, outside of quick trends.`;
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
                <div className="about-sabich">
                  <div className="about">
                    <div onClick={this.showAbout}>
                      <h3 style={{ fontFamily: "SabonBol" }}>About</h3>
                    </div>
                    <div className="about-inner">
                      <div className="about-x-button" onClick={this.showAbout}>
                        <h3 style={{ fontFamily: "SabonBol" }}>x</h3>
                      </div>
                      <p style={{ fontFamily: "SabonBol", fontSize: "20px" }}>
                        {aboutData}
                      </p>
                    </div>
                  </div>
                  <div className="sabich">
                    <div onClick={this.showSabich}>
                      <h3 style={{ fontFamily: "SabonBol" }}>
                        What is Sabich?
                      </h3>
                    </div>
                    <div className="sabich-inner">
                      <div className="sabich-x-button" onClick={this.showAbout}>
                        <h3 style={{ fontFamily: "SabonBol" }}>x</h3>
                      </div>
                      <h3 style={{ fontFamily: "SabonBol", fontSize: "20px" }}>
                        PLACEHOLDER FOR SABICH
                      </h3>
                    </div>
                  </div>
                </div>
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
