import React from "react";
import modal from "./foodtruck-menu.svg";
import "./App.css";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleSabich = this.toggleSabich.bind(this);
  }

  toggleAbout() {
    let about = document.querySelector(".modal-about");
    about.classList.toggle("visible");
  }

  toggleSabich() {
    let sabich = document.querySelector(".modal-sabich");
    sabich.classList.toggle("visible");
  }
  render() {
    return (
      <div className="menu">
        <div className="modal-container">
          <img src={modal} />

          <button className="about-toggle" onClick={this.toggleAbout}>
            About
          </button>
          <div className="modal-about">
            <p id="text">
              <strong>LIFESABICH</strong> is a food truck that doesn’t exist. A
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
              is for a slower conversation, outside of quick trends.{" "}
            </p>
          </div>
          <button className="sabich-toggle" onClick={this.toggleSabich}>
            What Is Sabich
          </button>
          <div className="modal-sabich">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7-qjb4jnRek"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </div>
          <div className="modal-shop" />
          <button className="shop-toggle">Menu</button>
        </div>
      </div>
    );
  }
}
