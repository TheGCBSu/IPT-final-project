import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from './resources/22.jpg';
import im1 from './resources/3.jpg';
import im2 from './resources/11.jpg';
import Hours from './resources/hours.jpg';

const HomePage = () => {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    return (
      <div className="homepage" style={backgroundStyle}>
        <header className="homepage-header">
          <h1 className="homepage-title">PIZZERIA</h1>
          <p className="homepage-description">Here we offer genuine Italian Pizzas. All freshly baked dough, topped with herbs and spices.</p>
        </header>
        <main className="homepage-content">
            <img src={im1} style={{ width: "20%", height: "auto" }}/>
            <img src={Hours} style={{ width: "20%", height: "auto" }}/>
            <img src={im2} style={{ width: "20%", height: "auto" }}/>
          <div className="homepage-content-wrapper">
            <Link to="/menu" className="homepage-button">
              View Menu
            </Link>
          </div>
        </main>
        <footer className="homepage-footer">
          <p className="homepage-footer-text">&copy; {new Date().getFullYear()} Pizza. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  


export default HomePage;