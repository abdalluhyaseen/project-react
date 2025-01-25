import React from "react";
// import Hero from "./componid/home page/Hero Section/Hero Section";
import Services from ".//componid/home page/services/Services";
import Activity from "./componid/home page/activity/activity";
import Contact from "./componid/home page/contact/contact";
import Teem from "./componid/home page/teem/teem"
import About from "./componid/home page/About us/Aboutus"
import Heder from "./componid/home page/herder/heder";

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Heder />
      <About />
      <Services />
      <Activity />
      <Contact />
      <Teem />
    </div>
  );
}

export default App;
