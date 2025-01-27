import React from "react";
import Services from ".//componid/home page/services/Services";
import Activity from "./componid/home page/activity/activity";
import Contact from "./componid/home page/contact/contact";
import Teem from "./componid/home page/teem/teem"
import About from "./componid/home page/About us/Aboutus"
import Heder from "./componid/home page/herder/heder";
import Footer from "./componid/home page/footer/footer";

function App() {
  return (
    <div className="App"> 
      <Heder />
      <About />
      <Services />
      <Activity />
      <Teem />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
