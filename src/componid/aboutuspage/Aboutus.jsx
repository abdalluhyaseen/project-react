import Abdalluh from "./img/abdalluh.jpg";
import Ahmad from "./img/ahmad.jpg";
import Rama from "./img/rama.jpg";
import Rahaf from "./img/rahaf.jpg";
import Rana from "./img/ranan.jpg";
import Jenan from "./img/jenan.jpg";
import Boy from "./img/c0d73d805848b15aead9d343be8f41d0.jpg";
import "./Aboutus.css";
import Nav from "../home page/navBar/nav";
import Footer from "../home page/footer/footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Imag1 from "./img/1.png";
import Imag2 from "./img/2.png";
import Imag3 from "./img/3.png";
import Imag4 from "./img/4.png";
import Imag5 from "./img/5.png";
import Imag6 from "./img/6.png";
import Imag7 from "./img/7.png";
import Imag8 from "./img/8.png";
import Imag9 from "./img/9.png";
import Imag10 from "./img/10.png";
import Imag11 from "./img/11.png";
import Imag12 from "./img/12..png";
import Imag13 from "./img/13.png";
import Imag14 from "./img/14.png";
import Imag15 from "./img/15.png";
import Imag16 from "./img/16.png";
import Imag17 from "./img/17.png";
import Imag18 from "./img/18.png";
import Imag19 from "./img/19.png";
import Imag20 from "./img/20.png";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="text-center">
      <Nav />
      <div className="about-section">
        <div className="overlay" />
        <h1 className="about-title"> An Overview of the School</h1>
        <img className="profile-img" src={Boy} />
        <p className="about-text">
          Our school is one of the leading educational institutions, committed
          to providing an excellent learning environment aimed at building a
          creative and future-friendly generation. The school relies on advanced
          educational curricula, combining the academic, educational and
          technological aspect, to ensure comprehensive student development.{" "}
        </p>
      </div>
      <h2 className="h2">🏫 Key Staff</h2>
      <div className="container3">
        <div className="card">
          <img src={Abdalluh} alt="صورة الشخص" />
          <h3>Abdalluh yaseen</h3>
          <p>Headmaster</p>
          <p>
            leads the school with a clear vision towards educational excellence.
          </p>
        </div>
        <div className="card">
          <img src={Ahmad} alt="صورة الشخص" />
          <h3>Ahmad Naser </h3>
          <p>Deputy Director's </p>
          <p>Supervises academic and administrative operations.</p>
        </div>
        <div className="card">
          <img src={Rama} alt="صورة الشخص" />
          <h3>Rama Alaidy</h3>
          <p>Head of E-Learning</p>
          <p>Responsible for integrating technology into education.</p>
        </div>
        <div className="card">
          <img src={Rahaf} alt="صورة الشخص" />
          <h3> Rahaf Aqrabawi</h3>
          <p>Head of Student Activities </p>
          <p>Organizes extra-curricular activities and initiatives.</p>
        </div>
        <div className="card">
          <img src={Rana} alt="صورة الشخص" />
          <h3>Rana Kreishan</h3>
          <p>Teachers' Council </p>
          <p>
            omprising a selection of qualified teachers specializing in various
            subjects.
          </p>
        </div>
        <div className="card">
          <img src={Jenan} alt="صورة الشخص" />
          <h3> Jenan Dweib</h3>
          <p>Teachers' Council</p>
          <p>
            omprising a selection of qualified teachers specializing in various
            subjects.
          </p>
        </div>
      </div>
      <h2 className="h2">🎓 Our Students</h2>
      <div className="nop">
        <motion.div
          className="container11"
          animate={{ x: isHovered ? 0 : "-50%" }}
          transition={{
            x: {
              repeat: Infinity,
              duration: isHovered ? 5 : 23,
              ease: "linear",
            },
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="card11">
            <img src={Imag1} alt="Map" />
            <h3>Ali Hassan</h3>
          </div>
          <div className="card11">
            <img src={Imag2} alt="Map" />
            <h3>Sara Khaled</h3>
          </div>
          <div className="card11">
            <img src={Imag3} alt="Map" />
            <h3>Mohammad Tariq</h3>
          </div>
          <div className="card11">
            <img src={Imag4} alt="Map" />
            <h3>Layla Ahmed</h3>
          </div>
          <div className="card11">
            <img src={Imag5} alt="Map" />
            <h3>Yousef Omar</h3>
          </div>
          <div className="card11">
            <img src={Imag6} alt="Map" />
            <h3>Fatima Noor</h3>
          </div>
          <div className="card11">
            <img src={Imag7} alt="Map" />
            <h3>Kareem Salah</h3>
          </div>
          <div className="card11">
            <img src={Imag8} alt="Map" />
            <h3>Rasha Samir</h3>
          </div>
          <div className="card11">
            <img src={Imag9} alt="Map" />
            <h3>Omar Fares</h3>
          </div>
          <div className="card11">
            <img src={Imag10} alt="Map" />
            <h3>Nour Hani</h3>
          </div>
          <div className="card11">
            <img src={Imag11} alt="Map" />
            <h3>Zaid Mahmoud</h3>
          </div>
          <div className="card11">
            <img src={Imag12} alt="Map" />
            <h3>Tariq Adel</h3>
          </div>
          <div className="card11">
            <img src={Imag13} alt="Map" />
            <h3> Hiba Saeed</h3>
          </div>
          <div className="card11">
            <img src={Imag14} alt="Map" />
            <h3> Ahmed Jamal</h3>
          </div>
          <div className="card11">
            <img src={Imag15} alt="Map" />
            <h3>Reem Basem</h3>
          </div>
          <div className="card11">
            <img src={Imag16} alt="Map" />
            <h3>Salma Ziad</h3>
          </div>
          <div className="card11">
            <img src={Imag17} alt="Map" />
            <h3>Sara <br /> Nasr</h3>
          </div>
          <div className="card11">
            <img src={Imag18} alt="Map" />
            <h3>Hana Fady</h3>
          </div>
          <div className="card11">
            <img src={Imag19} alt="Map" />
            <h3> Waleed Khaled</h3>
          </div>
          <div className="card11">
            <img src={Imag20} alt="Map" />
            <h3>Mohammad Tariq</h3>
          </div>
          <div className="card11">
            <img src={Imag1} alt="Map" />
            <h3> Ahmed Abdalluh</h3>
          </div>
          <div className="card11">
            <img src={Imag3} alt="Map" />
            <h3>Yousef Omar</h3>
          </div>
          <div className="card11">
            <img src={Imag7} alt="Map" />
            <h3>ahmad Noor</h3>
          </div>
          <div className="card11">
            <img src={Imag12} alt="Map" />
            <h3>Kareem Salah</h3>
          </div>
          <div className="card11">
            <img src={Imag16} alt="Map" />
            <h3>Rasha Samir</h3>
          </div>
          <div className="card11">
            <img src={Imag19} alt="Map" />
            <h3>Omar Fares</h3>
          </div>
          <div className="card11">
            <img src={Imag11} alt="Map" />
            <h3>Nour Hani</h3>
          </div>
          <div className="card11">
            <img src={Imag7} alt="Map" />
            <h3>Zaid Mahmoud</h3>
          </div>
          <div className="card11">
            <img src={Imag13} alt="Map" />
            <h3>Bilal Karim</h3>
          </div>
          <div className="card11">
            <img src={Imag19} alt="Map" />
            <h3>Nada Sameer</h3>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Header;
