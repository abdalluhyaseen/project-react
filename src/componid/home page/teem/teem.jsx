import React from "react";
import "./teem.css";
import Imge1 from "../img/Artificial-Intelligence.png";
import { useTranslation } from "react-i18next";

const TeamPage = () => {
  const { t } = useTranslation();
  return (
    <div className="body-team">
      <div className="container1">
        <img src={Imge1} alt="a" />
        <div className="text-content">
          <h1>
            <span className="span1"> {t("teem-title")}</span>
            <p className="span1">{t("teem-title1")}</p>
          </h1>
          <p className="para">{t("teem-description")}</p>
          <p className="para">{t("teem-description1")}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
