import React from "react";
import Services from ".//componid/home page/services/Services";
import Activity from "./componid/home page/activity/activity";
import Contact from "./componid/home page/contact/contact";
import Teem from "./componid/home page/teem/teem";
import Nav from "./componid/home page/navBar/nav";
import Footer from "./componid/home page/footer/footer";
import Hero from "./componid/home page/HeroSection/HeroSection";
// import Log from ".//componid/login/login";
import "./i18n";


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Activity />
      <Services />
      <Teem />
      <Contact />
      <Footer />
      {/* <Log /> */}
    </div>
  );
}

export default App;
