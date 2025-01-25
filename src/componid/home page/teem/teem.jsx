import React from 'react';
import "./teem.css";

function Team() {
  const teamMembers = [
    {
      name: 'Abdullah Yaseen',
      position: 'Contact page',
      description: 'Abdullah is responsible for the communication page to make it easier for everyone to communicate with the school.',
    },
    {
      name: 'Ahmad Shmaileh',
      position: 'Activity page',
      description: 'Ahmed is the one who designed the activities page and made it convenient and easy to use for everyone.',
    },
    {
      name: 'Rama Alaidy',
      position: 'Services page',
      description: 'Rama is responsible for the services page and has placed on the page the services that the page user inquires about.',
    },
    {
      name: 'Rahaf Alaqrabawi',
      position: 'Navbar, Hero Section, Footer page',
      description: 'Rahaf is responsible for designing the hero section to be easy to use, and the navbar and footer to make the page beautiful and serve the user.',
    },
    {
      name: 'Rana Kreishan',
      position: 'About us page',
      description: 'Rana is the administrator of the About Us page. She tells you about the goal of our page and the future vision of our service to you.',
    },
    {
      name: 'Jenan Dweab',
      position: 'Teams page',
      description: 'Janan is responsible for writing the team\'s work and keeping you informed of their developments on the page.',
    },
  ];

  return (
    <div className="team-page">
     

      <main>
        <section className="team">
          <h2>Meet Our Team</h2>
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <h3>{member.name}</h3>
              <p>Position: {member.position}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Team;
