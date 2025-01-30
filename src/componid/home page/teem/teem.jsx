import React from "react";
import "./teem.css";
import Imge1 from '../img/Artificial-Intelligence.png'

const TeamPage = () => {
  return (
    <div className="body-team">
      <div className="container1">
      <img src={Imge1} alt="a" />
        <div className="text-content">
          <h1>
            <span className="span1"> Discover Our Story</span>
            <p className="team">and Team</p>
          </h1>
          <p className="para">
            We are a passionate team of technology and innovation, starting our journey in the world of programming with the aim of developing advanced technical solutions that meet the needs of individuals and companies. Through our commitment to continuous learning and the use of state-of-the-art technologies, we create powerful and effective applications that contribute to improving users' lives and enhance business efficiency.
          </p>
          <p className="para">
            Our team consists of professional programmers and software development experts, gathered by passion and creativity. We have extensive experience in various areas of programming, from web and app development to artificial intelligence and data solutions. We work in a spirit of cooperation, and believe that innovation stems from sharing knowledge and experience, enabling us to deliver high-quality and sophisticated software solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
