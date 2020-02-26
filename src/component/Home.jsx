import React from "react";

// import { BrowserRouter, Route, NavLink } from "react-router-dom";
// ES6 Imports
import { Link, scroller } from "react-scroll";
const OFFSET = 50;
const DURATION = 1000;
const SMOOTH = true;

export const HeadingWithNav = () => {
  return (
    <div className="img-background-home">
      <div className="container">
        <div className=" row" style={{ paddingTop: "30px" }}>
          <div className="col-xl-6 col-sm-12 heading text-align-start">
            <span>adsome</span>
            <span className="heading-spark">spark</span>
          </div>
          <div className="col-xl-6 col-sm-12" style={{ marginTop: "30px" }}>
            <div className="row height-100">
              <div className="col-xl-3 col-sm-3 flex align-item-center height-100-media nav-links ">
                <Link
                  to="about-us"
                  activeClassName="nav-link-active"
                  smooth={SMOOTH}
                  offset={OFFSET}
                  duration={DURATION}
                >
                  About Us
                </Link>
              </div>
              <div className="col-xl-3 col-sm-3 flex align-item-center height-100-media nav-links">
                <Link
                  activeClassName="nav-link-active"
                  smooth={SMOOTH}
                  offset={OFFSET}
                  duration={DURATION}
                  to="services"
                >
                  Services
                </Link>
              </div>
              {/* <div className="col-xl-2 col-sm-3 flex align-item-center height-100-media nav-links">
                <Link activeClassName="nav-link-active" to="/work">
                  Work
                </Link>
              </div>
              <div className="col-xl-4 col-sm-3 flex align-item-center height-100-media nav-links">
                <Link activeClassName="nav-link-active" to="/contact-us">
                  Contact Us
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "70px" }}>
          <div className=" col-12  text-align-start">
            <span className="heading-2">Innovating The Way</span>
          </div>
        </div>
        <div className="row">
          <div className=" col-12  text-align-start">
            <span className="heading-3">Brands Are Built</span>
          </div>
        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-8 text-align-start">
            <p className="heading-detail">
              We are Adsomespark Adversing. A markeng & branding services Built
              for the digital economy. We are designed around customers and
              Fuelled by our ambion to drive sustainable business growth for
              your Brand & business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className=" about-us">
      <div className="container">
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-12 text-align-start">
            <article style={{ marginBottom: "30px" }}>
              <h1
                id="about-us"
                className="text-align-start section-heading"
                style={{ marginBottom: "30px" }}
              >
                About us
              </h1>
              <p className="about-us-details">
                No two of us are the same. Some loud. Some not so. Some
                wallflowers. Bikers. Hikers. Wrestlers. Footballers. Chefs.
                Garage bands. Normcore. Hardcore. What’s-that-core. Dog lovers.
                Cat lovers. Cat haters. Carnac. Trance. Carnac-trance. Bob.
                Babu. Roy. Joy. Whatsappers. Tinderers. Good old Facebookers.
                Bacon. No bacon. Paneer. Android. Apple. Species of every kind.
                With only one thing in common.
              </p>
              <p className="about-us-details">We are here for great.</p>
              <p className="about-us-details">We are Adsomespark.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export const scrollTo = id => {
  scroller.scrollTo(id, {
    duration: 2000,
    delay: 1000,
    smooth: "easeInOutQuart"
  });
};

export const Services = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-12">
          <h1 className="section-heading text-align-start" id="services">
            Services{" "}
          </h1>
        </div>
      </div>
      <div
        className="row"
        style={{ marginTop: "30px", justifyContent: "space-between" }}
      >
        <div class=" col-xl-3 col-sm-12 col-md-4">
          <div className="card height-100">
            <img src="a" class="card-img-top" alt="aa" />
            <div class="card-body">
              <h5 class="card-title">Creative</h5>
              <p class="card-text">
                We believe that targeted creave communicaon in print or outdoor
                or in the digital domain, can open new vistas for a brand. Only
                strategic creave with a persuasive message can bridge the gap
                between a brand and its consumer.
              </p>
            </div>
          </div>
        </div>

        <div class=" col-xl-3 col-sm-12 col-md-4">
          <div className="card height-100">
            <img src="aa" class="card-img-top" alt="aa" />
            <div class="card-body">
              <h5 class="card-title">Media</h5>
              <p class="card-text">
                Judicious spending from the right pockets can give opmum
                results. Our efficient media team can give you the desired
                support to plan your paid adversing budget in the right media to
                reap maximum benefits.
              </p>
            </div>
          </div>
        </div>

        <div class=" col-xl-3 col-sm-12 col-md-4">
          <div className="card height-100">
            <img src="aa" class="card-img-top" alt="aa" />
            <div class="card-body">
              <h5 class="card-title">Digital Content</h5>
              <p class="card-text">
                Digital promoon is the order of the day. With the majority of
                targeted buyers spending quality me in the digital space, brands
                are geng maximum mileage through online adversing and mobile
                markeng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurClients = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-12">
          <h1
            className="section-heading text-align-start"
            style={{ marginBottom: "30px" }}
          >
            Our Clients
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src="./toni.png" alt={"toni"} />
        </div>

        <div className="col-3">
          <img src="./adnox.png" alt={"adnox"} />
        </div>

        <div className="col-3">
          <img src="./naachiyars.png" alt={"naachiyars"} />
        </div>

        <div className="col-3">
          <img src="./boombolt.png" alt={"boombolt"} />
        </div>
      </div>
    </div>
  );
};
