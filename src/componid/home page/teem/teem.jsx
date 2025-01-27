import React from "react";
import "./teem.css";
import Img from "../img/WhatsApp Image 2025-01-25 at 11.49.45_20cb8094.jpg";

function Team() {
  const teamMembers = [
    {
      image: Img,
      name: "Abdullah Yaseen",
      position: "Contact page",
      description:
        "Abdullah is responsible for the communication page to make it easier for everyone to communicate with the school.",
    },
    {
      image: Img,
      name: "Ahmad Shmaileh",
      position: "Activity page",
      description:
        "Ahmed is the one who designed the activities page and made it convenient and easy to use for everyone.",
    },
    {
      image: Img,
      name: "Rama Alaidy",
      position: "Services page",
      description:
        "Rama is responsible for the services page and has placed on the page the services that the page user inquires about.",
    },
    {
      image: Img,
      name: "Rahaf Alaqrabawi",
      position: "Navbar, Hero Section, Footer page",
      description:
        "Rahaf is responsible for designing the hero section to be easy to use, and the navbar and footer to make the page beautiful and serve the user.",
    },
    {
      image: Img,
      name: "Rana Kreishan",
      position: "About us page",
      description:
        "Rana is the administrator of the About Us page. She tells you about the goal of our page and the future vision of our service to you.",
    },
    {
      image: Img,
      name: "Jenan Dweab",
      position: "Teams page",
      description:
        "Janan is responsible for writing the team's work and keeping you informed of their developments on the page.",
    },
  ];

  return (
    <div id="Teem" className="team-page">
      <h2 style={{ color: "black" }}>Meet Our Team</h2>

      <section className="team">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img style={{ width: "150px" }} src={member.image} alt="ss" />
            <h3>{member.name}</h3>
            <p>Position: {member.position}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Team;
