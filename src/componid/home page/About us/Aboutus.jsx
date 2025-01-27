import React from "react";
import "./About.css"


const AboutUsSection = () => {
  return (
    <section id="About" className="about-us">
      <h2>Get the best experience in school management system</h2>
      <p>
        Together we create a golden generation armed with knowledge and science
      </p>
    </section>
  );
};

const Buttons = () => {
  return (
    <div className="buttons">
      <button type="submit">LOG IN</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="body">
      
      <AboutUsSection />
      <Buttons />
    </div>
  );
};

export default App;
