import React  from 'react'
import Amro  from '../../home page/img/123.jpeg'
import Ahmad from "../../home page/img/123.jpeg";
import { IoArrowForwardOutline } from 'react-icons/io5';
// import { useTranslation } from 'react-i18next';

import './team.css'

 function Coach()  {
  // const { t } = useTranslation();

    const Member = {
      backgroundImage: `url(${[ Amro , Ahmad ].join(", ")})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '200px',
      borderRadius: '50%',
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
              jenan <IoArrowForwardOutline />{" "}
            </a>
          </div>

          <div className="member">
            <img
              src={Ahmad}
              alt="Member"
              style={Member}
              className="image-member"
            />
            <h4> rana </h4>
            <h6> rahaf </h6>
            <a
              href="./Ahmad"
              style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
            >
              {" "}
              rama <IoArrowForwardOutline />{" "}
            </a>
          </div>
        </div>
      </div>
    );
}
export default Coach

// <div className='icons-person'><a href='./join'> <IoLogoFacebook  />  </a> <a href='./join'> <IoLogoInstagram   />  </a> <a href='./join'> <IoLogoLinkedin  />  </a> </div>
