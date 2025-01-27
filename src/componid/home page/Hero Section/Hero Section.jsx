import React, { useEffect } from 'react';

const SmartSchool = () => {
  const containerStyle = {
    position: 'relative',
    left: '10%',
    width: '1000px',
    height: '600px',
    background: '#f5f5f5',
    boxShadow: '0 30px 50px #dbdbdb',
  };

  const slideStyle = {
    position: 'relative',
    height: '100%',
  };

  const itemStyle = {
    width: '200px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    borderRadius: '20px',
    boxShadow: '0 30px 50px #505050',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    display: 'inline-block',
    transition: '0.5s',
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '100px',
    width: '300px',
    textAlign: 'left',
    color: '#eee',
    transform: 'translate(0, -50%)',
    fontFamily: 'system-ui',
    display: 'none',
  };

  const nameStyle = {
    fontSize: '40px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#118B50',
  };

  const desStyle = {
    marginTop: '10px',
    marginBottom: '20px',
    color: 'black',
  };

  const buttonContainerStyle = {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '20px',
  };

  const buttonStyle = {
    width: '40px',
    height: '35px',
    borderRadius: '8px',
    border: '1px solid #000',
    margin: '0 5px',
    cursor: 'pointer',
    transition: '0.3s',
  };

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNext = () => {
      const items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    const handlePrev = () => {
      const items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleNext);
    prev.addEventListener('click', handlePrev);

    return () => {
      next.removeEventListener('click', handleNext);
      prev.removeEventListener('click', handlePrev);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={slideStyle} className="slide">
        <div
          style={{ ...itemStyle, backgroundImage: 'url(img1.jpeg)', width: '100%', height: '100%' }}
          className="item"
        >
          <div style={{ ...contentStyle, display: 'block' }}>
            <div style={nameStyle}>
              Welcome to{' '}
              <span
                style={{
                  color: '#5DB996',
                  background: 'linear-gradient(to right, #5DB996, #118B50)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SmartSchool!
              </span>
            </div>
            <div style={desStyle}>
              <h5>
                SmartSchool is a modern and innovative platform designed to enhance the learning experience for
                students, teachers, and parents. Here's what makes it unique.
              </h5>
            </div>
          </div>
        </div>

        <div
          style={{ ...itemStyle, backgroundImage: './', left: '50%' }}
          className="item"
        >
          <div style={contentStyle}>
            <div style={desStyle}>
              <h4>For Students: Interactive lessons, fun quizzes, and personalized learning paths.</h4>
            </div>
            <div style={desStyle}>
              <h4>
                For Teachers: Easy class management, tools for creating engaging content, and real-time analytics on
                student progress.
              </h4>
            </div>
            <div style={desStyle}>
              <h4>
                For Parents: Stay updated with your child's achievements and communicate seamlessly with teachers.
              </h4>
            </div>
          </div>
        </div>

        <div
          style={{ ...itemStyle, backgroundImage: 'WhatsApp Image 2025-01-25 at 5.31.47 PM.jpeg', left: 'calc(50% + 220px)' }}
          className="item"
        >
          <div style={contentStyle}>
            <div style={desStyle}>
              <h4>SmartSchool makes learning smarter, simpler, and more exciting for everyone! 🌟</h4>
            </div>
          </div>
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <button style={buttonStyle} className="prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button style={buttonStyle} className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SmartSchool;