import React from "react";
import "./aboutus.css"

const staffMembers = [
  {
    name: "Abdalluh Yaseen",
    role: "Headmaster",
    description:
      "Leads the school with a clear vision towards educational excellence.",
    imgSrc: "../عبدالله.jpg",
  },
  {
    name: "Ahmad Naser",
    role: "Deputy Director",
    description: "Supervises academic and administrative operations.",
    imgSrc: "../احمد.jpg",
  },
  {
    name: "Rama Alaidy",
    role: "Head of E-Learning",
    description: "Responsible for integrating technology into education.",
    imgSrc: "../راما.jpg",
  },
  {
    name: "Rahaf Aqrabawi",
    role: "Head of Student Activities",
    description: "Organizes extra-curricular activities and initiatives.",
    imgSrc: "../رهف.jpg",
  },
  {
    name: "Rana Kreishan",
    role: "Teachers' Council",
    description:
      "Comprising a selection of qualified teachers specializing in various subjects.",
    imgSrc: "../رنا2.jpg",
  },
  {
    name: "Jenan Dweib",
    role: "Teachers' Council",
    description:
      "Comprising a selection of qualified teachers specializing in various subjects.",
    imgSrc: "../جنان2.jpg",
  },
];

const About = () => {
  return (
    <div className="text-gray-800 p-6">
      <div className="relative text-center py-10 bg-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">An Overview of the School</h1>
        <img
          src="../c0d73d805848b15aead9d343be8f41d0.jpg"
          alt="Profile"
          className="w-40 h-40 mx-auto rounded-full shadow-md"
        />
        <p className="mt-4 max-w-2xl mx-auto">
          Our school is one of the leading educational institutions, committed
          to providing an excellent learning environment aimed at building a
          creative and future-friendly generation. The school relies on advanced
          educational curricula, combining the academic, educational, and
          technological aspects to ensure comprehensive student development.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 text-center">🏫 Key Staff</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg text-center"
          >
            <img
              src={staff.imgSrc}
              alt={staff.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 shadow"
            />
            <h3 className="text-xl font-semibold">{staff.name}</h3>
            <p className="text-gray-600">{staff.role}</p>
            <p className="text-sm mt-2">{staff.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
