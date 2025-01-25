import React from "react";
import "./Services.css"; 

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Smart School</h2>
      <div className="services-grid">
        <div className="service-item active">
          <div className="icon">💻</div>
          <h3>Student Affairs Department</h3>
          <p>Student registration and admission. Management of attendance.</p>
        </div>
        <div className="service-item">
          <div className="icon">📈</div>
          <h3>E-Learning</h3>
          <p>Manage online lessons and study materials.</p>
        </div>
        <div className="service-item">
          <div className="icon">🎨</div>
          <h3>Teachers' Department</h3>
          <p>Monitor teachers' performance and evaluations.</p>
        </div>
        <div className="service-item">
          <div className="icon">📊</div>
          <h3>Data Analysis</h3>
          <p>Examinations and evaluations</p>
        </div>
        <div className="service-item">
          <div className="icon">📱</div>
          <h3>Fee and Payment Management</h3>
          <p>School Activities Department.</p>
        </div>
        <div className="service-item">
          <div className="icon">📄</div>
          <h3>Data Analysis and Decision-Making</h3>
          <p>Detailed reports on students' performance.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
