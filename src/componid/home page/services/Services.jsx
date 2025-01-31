import React from "react";
import "./Services.css"; 
import { useTranslation } from "react-i18next";


const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="Services" className="services-section">
      <h2 className="section-title">{t("services")}</h2>
      <div className="services-grid">
        <div className="service-item active">
          <div className="icon">💻</div>
          <h3>{t("services-title")}</h3>
          <p>{t("services-description")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📈</div>
          <h3>{t("services-title1")}</h3>
          <p>{t("services-description1")}</p>
        </div>
        <div className="service-item">
          <div className="icon">🎨</div>
          <h3>{t("services-title2")}</h3>
          <p>{t("services-description2")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📊</div>
          <h3>{t("services-title3")}</h3>
          <p>{t("services-description3")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📱</div>
          <h3>{t("services-title4")}</h3>
          <p>{t("services-description4")}</p>
        </div>
        <div className="service-item">
          <div className="icon">📄</div>
          <h3>{t("services-title5")}</h3>
          <p>{t("services-description5")}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
