import React, { Component } from "react";
import "../styles/Home.css";
import {
  HeadingWithNav,
  AboutUs,
  Services,
  OurClients
} from "../component/Home";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeadingWithNav />

        <AboutUs />
        <Services />

        <OurClients />
        <HeadingWithNav />
      </>
    );
  }
}
