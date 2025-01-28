import React from "react";
import Hussien from "../../home page/img/123.jpeg";
import Shahed from "../../home page/img/123.jpeg";
import Amro from "../../home page/img/123.jpeg";
import Laith from "../../home page/img/123.jpeg";
import { IoArrowForwardOutline } from "react-icons/io5";
// import { useTranslation } from 'react-i18next';
import "./team.css";

function Technical() {
  // const { t } = useTranslation();

  const Member = {
    backgroundImage: `url(${[Amro, Hussien, Shahed, Laith].join(", ")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    borderRadius: "50%",
    border: "3px solid #BDE4F4",
  };
  return (
    <div className="Mangement">
      <h2> abdalluh </h2>
      <p> ahmad </p>
      <div className="container-mang">
        <div className="member">
          <img
            src={Amro}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> rana </h4>
          <h6> rahaf </h6>
          <a
            href="./Amro"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            more <IoArrowForwardOutline />{" "}
          </a>
        </div>

        <div className="member">
          <img
            src={Hussien}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> rana </h4>
          <h6> rahaf </h6>
          <a
            href="./Hussien"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            more <IoArrowForwardOutline />{" "}
          </a>
        </div>
        <div className="member">
          <img
            src={Shahed}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> rana </h4>
          <h6> rahaf </h6>
          <a
            href="./Shahd"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            more
            <IoArrowForwardOutline />{" "}
          </a>
        </div>
        <div className="member">
          <img
            src={Laith}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> rana </h4>
          <h6> rahaf </h6>
          <a
            href="./Laith"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            more <IoArrowForwardOutline />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Technical;
