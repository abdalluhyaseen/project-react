import React from "react";
// import { useNavigate } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { color } from "motion/react";
function Navbar() {
  const { t, i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  return (
    <div className="main-s">
      <nav
        style={{ direction: selectedLanguage === "ar" ? "rtl" : "ltr" }}
        className="navbar1"
      >
        <div className="logo">
          <h1>{t("nav-title")}</h1>
        </div>
        <div>
          <ul className="centered-components">
            <li className="element">
              <a href="/">{t("nava")}</a>
            </li>
            <li className="element">
              <a href="/b"> {t("nava1")} </a>
            </li>
            <li className="element">
              <a href="/c"> {t("nava2")} </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="right-components">
            <li>
              {i18n.language === "en" && (
                <button
                  className="ar"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                >
                  AR
                </button>
              )}

              {i18n.language === "ar" && (
                <button
                  className="en"
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  EN
                </button>
              )}
            </li>
            <li className="element">
              <Link to="/fn">
                <BsPersonCircle
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                    margin: "7px",
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
