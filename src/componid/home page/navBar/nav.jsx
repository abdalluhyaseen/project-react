import React from "react";
// import { useNavigate } from "react-router-dom";
import "./nav.css";
import { useTranslation } from "react-i18next";


function Navbar() {
  // const navigate = useNavigate();
  const { t, i18n } = useTranslation();


  return (
    <div className="main-s">
      <nav className="navbar1">
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
