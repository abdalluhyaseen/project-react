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
    <div id="Activity">
      <h1 className="speacial-heading">Activity</h1>
      <section className="services">
        <div className="container_services">
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#6c757d" }}>
              <IoTrophySharp
                color={"#303030"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>Project-Based Learning</h2>
              <p>
                Students work on projects using techniques such as 3D printing
                or creative software.
              </p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#6c757d" }}>
              <IoBasketballSharp
                color={"#303030"}
                rotate
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>Educational Games (Gamification)</h2>
              <p>
                Integrate digital games into educational curricula to encourage
                students to participate
              </p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#6c757d" }}>
              <IoPersonSharp
                color={"#303030"}
                beat
                height="140px"
                width="140px"
              />
            </div>
            <div className="content_services">
              <h2>Digital Assessmen</h2>
              <p>Use online tests to evaluate students immediately</p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#6c757d" }}>
              <IoCalendarSharp
                color={"#303030"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>Virtual workshops</h2>
              <p>
                Organizing workshops across digital platforms such as Zoom or
                Microsoft Teams to learn students from experts around the world.
              </p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#6c757d" }}>
              <IoHeartSharp color={"#303030"} beat height="70px" width="70px" />
            </div>
            <div className="content_services">
              <h2>Reactive Education</h2>
              <p>Using smart blackboards to offer interactive lessons</p>
            </div>
          </div>
          <div className="serviceBox" style={{ backgroundColor: "#303030" }}>
            <div className="icon" style={{ "--i": "#6c757d" }}>
              <IoLaptopSharp
                color={"#303030"}
                beat
                height="70px"
                width="70px"
              />
            </div>
            <div className="content_services">
              <h2>Pragmatic activities using technology</h2>
              <p>
                Like programming, robot building, or virtual experiments in
                science
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
