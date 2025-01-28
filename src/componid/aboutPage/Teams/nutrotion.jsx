import React  from 'react'
import Rania from '../../home page/img/123.jpeg'
// import { useTranslation } from 'react-i18next';
import { IoArrowForwardOutline } from 'react-icons/io5';


import './team.css'
function Nutrotion() {
  // const { t } = useTranslation();

    const Member = {
        backgroundImage: `url(${[Rania].join(", ")})`,
    backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        borderRadius: '50%',
        border: "3px solid #BDE4F4"
      };
  return (
    <div className="Mangement">
      <h4> rana </h4>
      <h6> rahaf </h6>

      <div className="container-mang">
        <div className="member">
          <img
            src={Rania}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> rana </h4>
          <h6> rahaf </h6>
          <a
            href="/Rania"
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
export default Nutrotion