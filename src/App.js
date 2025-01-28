import React from "react";
import Services from ".//componid/home page/services/Services";
import Activity from "./componid/home page/activity/activity";
import Contact from "./componid/home page/contact/contact";
import Teem from "./componid/home page/teem/teem";
import About from "./componid/home page/About us/Aboutus";
import Heder from "./componid/home page/herder/heder";
import Footer from "./componid/home page/footer/footer";
// import Log from "./componid/login page/login";
import Hero from "./componid/home page/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <Heder />
      <Hero />
      <About />
      <Services />
      <Activity />
      <Teem />
      <Contact />
      <Footer />
      {/* <Log /> */}
    </div>
  );
}

export default App;
