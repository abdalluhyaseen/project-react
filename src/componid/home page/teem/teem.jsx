import React from "react";
import "./teem.css";
import Imge1 from "../img/Artificial-Intelligence.png";
import { useTranslation } from "react-i18next";

const TeamPage = () => {
  const { t } = useTranslation();
  return (
    <div className="body-team">
      <div className="container2">
        <img className="img1" src={Imge1} alt="a" />
        <div className="text-content">
          <h1 className="span1">
            {t("teem-title")} <br /> {t("teem-title1")}
          </h1>
          <p className="para">{t("teem-description")}</p>
          <p className="para">{t("teem-description1")}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
