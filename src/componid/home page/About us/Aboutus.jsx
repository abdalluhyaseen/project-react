import React from "react";
import imageAbout from "../img/image-header-desktop.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BsLifePreserver } from "react-icons/bs";

import "./About.css";

function Aboutus() {
  return (
    <div>
      <>
        {/* ONE */}
        <div className="box_brieff">
          <div className="single_brief">
            <div className="icon_breif">
              <BsFillTelephoneFill
                style={{
                  paddingTop: "15px",
                  color: "black",
                  fontSize: " 15px",
                  margin: "2px",
                }}
              />{" "}
            </div>
            <h2> Telephone </h2>
            <p> +962 799379762</p>
          </div>
          <div className="single_brief">
            <div className="icon_breif">
              <CiLocationOn
                style={{
                  paddingTop: "15px",
                  color: "black",
                  fontSize: " 18px",
                  margin: "2px",
                }}
              />{" "}
            </div>
            <h2> Clinic location </h2>
            <p> Aqaba - Jordan </p>
          </div>
          <div className="single_brief">
            <div className="icon_breif">
              <BsLifePreserver
                style={{
                  paddingTop: "15px",
                  color: "black",
                  fontSize: " 18px",
                  margin: "2px",
                }}
              />{" "}
            </div>
            <h2> Appoinement </h2>
            <p>Book appointments and consultations</p>
          </div>
        </div>
        {/* ONE  */}
        {/* About Dr */}
        <section className="about_dr">
          <div className="main_dr">
            <div className="all-text">
              <h4> Dr . Abdalmajed Shandaq</h4>
              <h1>A certified dental surgeon locally and internationally.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati fugit quis consequuntur alias? Debitis tempore minima
                suscipit corrupti corporis, doloremque optio placeat nihil ab ad
                dolore deserunt voluptatem est soluta.
              </p>
              <div className="btn_dr">
                {/* <a href="./Html/AboutUs.html" /> */}
                <button type="button"> Our Team </button>
                <button type="button" className="btn2">
                  {" "}
                  Learn More{" "}
                </button>
              </div>
            </div>
            <img src={imageAbout} alt="about" />
          </div>
        </section>
        {/* About Dr */}
      </>
    </div>
  );
}

export default Aboutus;
