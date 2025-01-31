import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Image from "../img/logo.svg";
import Image1 from "../img/illustration-mockups.svg";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useTranslation();
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
                {t("hero-title")} <br /> {t("hero-title1")}
              </h1>
              <p>{t("herop")}</p>
              <a href="/Log"> {t("heroa")}</a>
            </div>
          </div>
          <div className="social">
            <a
              href="www.facebook.com"
              aria-label="Read More and click in my facebook account"
            >
              <MdFacebook
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              />{" "}
            </a>
            <a
              href="www.instagram.com"
              aria-label="Read More and click in my instagram account"
            >
              <AiFillInstagram
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              />{" "}
            </a>
            <a
              href="www.twitter.com"
              aria-label="Read More and click in my twitter account"
            >
              <FaTwitter
                style={{
                  color: "white",
                  fontSize: "1.5rem",
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
