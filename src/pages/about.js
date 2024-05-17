import React from 'react';
import './AboutPage.css';
import backgroundImage from './resources/3.jpg';

const AboutPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="aboutpage" style={backgroundStyle}>
      <header className="aboutpage-header">
        <h1 className="aboutpage-title">About Us</h1>
      </header>
      <main className="aboutpage-content">
        <p className="aboutpage-intro">
          <h3>Intro:</h3><br/> Here we offer genuine Italian Pizzas. All freshly baked dough, topped with herbs and spices.
        </p>
        <div className="aboutpage-address">
          <h3>Address:</h3>
          <p>15 Mabini St. Don Domingo Maddela, Bayombong, Philippines, 3700</p>
        </div>
        <div className="aboutpage-contact">
          <h3>Contact Information:</h3>
          <p>Mobile: 0917 112 7728</p>
          <p>Email: rachelruthrivera@ymail.com</p>
        </div>
      </main>
      <footer className="aboutpage-footer">
        <p className="aboutpage-footer-text">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;