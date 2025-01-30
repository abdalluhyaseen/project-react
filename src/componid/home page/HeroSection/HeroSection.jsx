import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import Image from "../img/logo.svg";
import Image1 from "../img/illustration-mockups.svg";

import "./HeroSection.css";

function HeroSection() {
  return (
    <main className="main-div">
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <img src={Image} alt="" />
          </div>
          <div className="content">
            <div className="hero-img">
              <img src={Image1} alt="" />
            </div>
            <div className="hero-text">
              <h1>
                Build The Community <br />
                Your Fans Will Love
              </h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <a href="#">Register</a>
            </div>
          </div>
          <div className="social">
            <a
              href="www.facebook.com"
              aria-label="Read More and click in my facebook account"
            >
              <AiFillAccountBook
                style={{
                  color: "white",
                  fontSize: " 18px",
                  margin: "2px",
                }}
              />{" "}
            </a>
            <a
              href="www.instagram.com"
              aria-label="Read More and click in my instagram account"
            >
              <AiFillAccountBook
                style={{
                  color: "white",
                  fontSize: " 18px",
                  margin: "2px",
                }}
              />{" "}
            </a>
            <a
              href="www.twitter.com"
              aria-label="Read More and click in my twitter account"
            >
              <AiFillAccountBook
                style={{
                  color: "white",
                  fontSize: " 18px",
                  margin: "2px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
