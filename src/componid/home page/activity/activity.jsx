import React from "react";
import {
  IoPersonSharp,
  IoTrophySharp,
  IoHeartSharp,
  IoBasketballSharp,
  IoCalendarSharp,
  IoLaptopSharp,
} from "react-icons/io5";
import "./activity.css";

function Services() {
  return (
    <div>
      <h1 class="speacial-heading">Activity</h1>
      <section className="services">
        <div className="container_services">
          <div className="serviceBox">
            <div className="icon" style={{ "--i": "#BDE4F4" }}>
              <IoTrophySharp
                color={"#a69b9b"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>title</h2>
              <p>content</p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon" style={{ "--i": "#404969" }}>
              <IoBasketballSharp
                color={"#a69b9b"}
                rotate
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>title</h2>
              <p>content</p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon" style={{ "--i": "#DC552C" }}>
              <IoPersonSharp
                color={"#a69b9b"}
                beat
                height="140px"
                width="140px"
              />
            </div>
            <div className="content_services">
              <h2>title</h2>
              <p>content</p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon" style={{ "--i": "#404969" }}>
              <IoCalendarSharp
                color={"#a69b9b"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>title</h2>
              <p>content</p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon" style={{ "--i": "#DC552C" }}>
              <IoHeartSharp color={"#a69b9b"} beat height="70px" width="70px" />
            </div>
            <div className="content_services">
              <h2>title</h2>
              <p>content</p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon" style={{ "--i": "#BDE4F4" }}>
              <IoLaptopSharp
                color={"#a69b9b"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>title</h2>
              <p>content</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
