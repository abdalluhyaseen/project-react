import Abdalluh from "./img/abdalluh.jpg";
import Ahmad from "./img/ahmad.jpg";
import Rama from "./img/rama.jpg";
import Rahaf from "./img/rahaf.jpg";
import Rana from "./img/ranan.jpg";
import Jenan from "./img/jenan.jpg";
import Boy from "./img/c0d73d805848b15aead9d343be8f41d0.jpg";
import "./Aboutus.css";
import Nav from "../home page/navBar/nav";
import Footer from "../home page/footer/footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Imag1 from "./img/1.png";
import Imag2 from "./img/2.png";
import Imag3 from "./img/3.png";
import Imag4 from "./img/4.png";
import Imag5 from "./img/5.png";
import Imag6 from "./img/6.png";
import Imag7 from "./img/7.png";
import Imag8 from "./img/8.png";
import Imag9 from "./img/9.png";
import Imag10 from "./img/10.png";
import Imag11 from "./img/11.png";
import Imag12 from "./img/12..png";
import Imag13 from "./img/13.png";
import Imag14 from "./img/14.png";
import Imag15 from "./img/15.png";
import Imag16 from "./img/16.png";
import Imag17 from "./img/17.png";
import Imag18 from "./img/18.png";
import Imag19 from "./img/19.png";
import Imag20 from "./img/20.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="text-center">
      <Nav />
      <div className="about-section">
        <div className="overlay" />
        <h1 className="about-title"> {t("about-page-titel")}</h1>
        <img className="profile-img" src={Boy} alt="mo" />
        <p className="about-text">{t("about-page-description")} </p>
      </div>
      <h2 className="h2">🏫 {t("about-page-titel1")}</h2>
      <div className="container3">
        <div className="card22">
          <img className="img1" src={Abdalluh} alt="صورة الشخص" />
          <h3>{t("about-page-card-name1")}</h3>
          <p>{t("about-page-card-title1")}</p>
          <p>{t("about-page-card-description1")} </p>
        </div>
        <div className="card22">
          <img className="img1" src={Ahmad} alt="صورة الشخص" />
          <h3> {t("about-page-card-name2")}</h3>
          <p>{t("about-page-card-title2")}</p>
          <p>{t("about-page-card-description2")}</p>
        </div>
        <div className="card22">
          <img className="img1" src={Rama} alt="صورة الشخص" />
          <h3>{t("about-page-card-name3")} </h3>
          <p>{t("about-page-card-title3")}</p>
          <p>{t("about-page-card-description3")}</p>
        </div>
        <div className="card22">
          <img className="img1" src={Rahaf} alt="صورة الشخص" />
          <h3>{t("about-page-card-name4")} </h3>
          <p>{t("about-page-card-title4")} </p>
          <p>{t("about-page-card-description4")}</p>
        </div>
        <div className="card22">
          <img className="img1" src={Rana} alt="صورة الشخص" />
          <h3>{t("about-page-card-name5")} </h3>
          <p>{t("about-page-card-title5")} </p>
          <p>{t("about-page-card-description5")}</p>
        </div>
        <div className="card22">
          <img className="img1" src={Jenan} alt="صورة الشخص" />
          <h3>{t("about-page-card-name6")} </h3>
          <p>{t("about-page-card-title6")}</p>
          <p>{t("about-page-card-description6")}</p>
        </div>
      </div>
      <h2 className="h2">🎓 {t("about-page-Students-title")} </h2>
      <div className="nop">
        <motion.div
          className="container11"
          animate={{ x: isHovered ? 0 : "-60%" }}
          transition={{
            x: {
              repeat: Infinity,
              duration: isHovered ? 7 : 23,
              ease: "linear",
            },
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="card11">
            <img src={Imag1} alt="Map" />
            <h3>{t("about-page-Students-name1")}</h3>
          </div>
          <div className="card11">
            <img src={Imag2} alt="Map" />
            <h3>{t("about-page-Students-name2")}</h3>
          </div>
          <div className="card11">
            <img src={Imag3} alt="Map" />
            <h3>M{t("about-page-Students-name3")}</h3>
          </div>
          <div className="card11">
            <img src={Imag4} alt="Map" />
            <h3>{t("about-page-Students-name4")}</h3>
          </div>
          <div className="card11">
            <img src={Imag5} alt="Map" />
            <h3>{t("about-page-Students-name5")}</h3>
          </div>
          <div className="card11">
            <img src={Imag6} alt="Map" />
            <h3>{t("about-page-Students-name6")}</h3>
          </div>
          <div className="card11">
            <img src={Imag7} alt="Map" />
            <h3>{t("about-page-Students-name7")}</h3>
          </div>
          <div className="card11">
            <img src={Imag8} alt="Map" />
            <h3>{t("about-page-Students-name8")}</h3>
          </div>
          <div className="card11">
            <img src={Imag9} alt="Map" />
            <h3>{t("about-page-Students-name9")}</h3>
          </div>
          <div className="card11">
            <img src={Imag10} alt="Map" />
            <h3>{t("about-page-Students-name10")}</h3>
          </div>
          <div className="card11">
            <img src={Imag11} alt="Map" />
            <h3>{t("about-page-Students-name11")}</h3>
          </div>
          <div className="card11">
            <img src={Imag12} alt="Map" />
            <h3>{t("about-page-Students-name12")}</h3>
          </div>
          <div className="card11">
            <img src={Imag13} alt="Map" />
            <h3>{t("about-page-Students-name13")}</h3>
          </div>
          <div className="card11">
            <img src={Imag14} alt="Map" />
            <h3>{t("about-page-Students-name14")}</h3>
          </div>
          <div className="card11">
            <img src={Imag15} alt="Map" />
            <h3>{t("about-page-Students-name15")}</h3>
          </div>
          <div className="card11">
            <img src={Imag16} alt="Map" />
            <h3>{t("about-page-Students-name16")}</h3>
          </div>
          <div className="card11">
            <img src={Imag17} alt="Map" />
            <h3>{t("about-page-Students-name17")}</h3>
          </div>
          <div className="card11">
            <img src={Imag18} alt="Map" />
            <h3>{t("about-page-Students-name18")}</h3>
          </div>
          <div className="card11">
            <img src={Imag19} alt="Map" />
            <h3>{t("about-page-Students-name19")}</h3>
          </div>
          <div className="card11">
            <img src={Imag20} alt="Map" />
            <h3>{t("about-page-Students-name20")}</h3>
          </div>
          <div className="card11">
            <img src={Imag1} alt="Map" />
            <h3>{t("about-page-Students-name21")}</h3>
          </div>
          <div className="card11">
            <img src={Imag3} alt="Map" />
            <h3>{t("about-page-Students-name22")}</h3>
          </div>
          <div className="card11">
            <img src={Imag7} alt="Map" />
            <h3>{t("about-page-Students-name23")}</h3>
          </div>
          <div className="card11">
            <img src={Imag12} alt="Map" />
            <h3>{t("about-page-Students-name24")}</h3>
          </div>
          <div className="card11">
            <img src={Imag16} alt="Map" />
            <h3>{t("about-page-Students-name25")}</h3>
          </div>
          <div className="card11">
            <img src={Imag19} alt="Map" />
            <h3>{t("about-page-Students-name26")}</h3>
          </div>
          <div className="card11">
            <img src={Imag11} alt="Map" />
            <h3>{t("about-page-Students-name27")}</h3>
          </div>
          <div className="card11">
            <img src={Imag7} alt="Map" />
            <h3>{t("about-page-Students-name28")}</h3>
          </div>
          <div className="card11">
            <img src={Imag13} alt="Map" />
            <h3>{t("about-page-Students-name29")}</h3>
          </div>
          <div className="card11">
            <img src={Imag19} alt="Map" />
            <h3>{t("about-page-Students-name30")}</h3>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Header;
